import * as d3 from 'd3';
import textures from 'textures';

var svg = d3.select('.js-texture-break')
    .append('svg')
    .attr('viewBox', '0 0 100 50')
    .style('display', 'block');

var t = textures.lines()
  .thicker()
  .lighter()
  .stroke('#dacaee');

svg.call(t);

svg.append('rect')
	.style('fill', t.url())
    .style('width', '100%')
    .style('height', '100%');

///////

var skillData = {
    'HTML/CSS': 95,
    'Git': 80,
    'JS': 75,
    'PHP': 70,
    'Webpack': 60,
    'React': 50,
    'Python': 40
};
var skillNames = Object.keys(skillData);
var skillNumbers = Object.values(skillData);


var ul = d3.select('.js-chart__legend')
    .append('ul')
    .style('text-align', 'right')
    .selectAll('li')
        .data(skillNames)
        .enter()
        .append('li')
        .text(function(d) {
            return d;
        });


var svg = d3.select('.js-chart__graph')
    .append('svg')
    .style('width', '100%')
    .style('height', '160px');

svg.selectAll('rect')
    .data(skillNumbers)
    .enter()
    .append('rect')
        .attr('y', function(d, i){
            return i * 16 * 1.5 + 'px';
        })
        .attr('height', '16px')
        .attr('fill', '#343434')
        .attr('width', function(d){
            return d + '%';
        })
        .attr('x', 0)
        .style('opacity', function(d) {
            return d/100 * 1.25;
        });

$('.nav-button').on('click', function() {
    $('body').toggleClass('show-nav');
    if ($('body').hasClass('show-nav')) {
        $.ajax({
            type: 'GET',
            url: '_includes/nav.php',
            success: function(data) {
                $('.expanded-section-overlay').prepend(data);
            }
        });
    } else {
        $('.expanded-section-overlay').empty();
    };
});

$('.js-button-expand').on('click', function(e) {
    var clicked = $(e.target);

    var section = clicked.closest('section').attr('class');
    console.log(section);

    history.pushState({
        page: section,
    }, 'Jack Greenberg | ' + section, '/' + section);

    // window.onpopstate = function(e) {
    //     console.log(history.state.page);
    // };

    $('body').addClass(section + '--expanded');
});

$('.js-close-section-button').on('click', function() {
    $('body').removeClass(function(i, className) {
        return (className.match(/(.)*\-\-expanded*/) || []).join(' ') + ' show-nav';
    });
    history.pushState(null, null, '/');
});
