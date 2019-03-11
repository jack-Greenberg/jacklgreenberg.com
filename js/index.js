import * as d3 from 'd3';
import textures from 'textures';

var svg = d3.select('.js-texture-break')
    .append('svg')
;

var t = textures.lines()
    .heavier()
    .thinner(.7)
    .stroke('#dacaee')
;

svg.call(t);

svg.append('rect')
	.style('fill', t.url())
    .attr('x', '0')
    .attr('y', '0')
    .attr('width', '100%')
    .attr('height', '100%')
;

///////

var skillData = {
    'HTML/CSS': 95,
    'Git': 80,
    'JS': 75,
    'PHP': 70,
    'NGINX': 60,
    'Webpack': 60,
    'React': 50,
    'Python': 40,
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
        })
;


var svg = d3.select('.js-chart__graph')
    .append('svg')
    .style('width', '100%')
    .style('height', (skillNames.length * 16) + (skillNames.length * 7) + 'px')
;

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
        })
    ;

$('.nav-button').on('click', function() {
    $('body').toggleClass('show-nav');
});

// The expand-section button
$('.js-button-expand').on('click', function(e) {
    var clicked = $(e.target);
    var section = clicked.closest('section').attr('class');

    history.pushState({page: section}, null, '/' + section);
    console.log(history.state);
    document.title = 'Jack Greenberg | ' + section;
    $('body').addClass(section + '--expanded');
});

// Overrides the back button, and uses it to remove the section
$(window).on('popstate', function(e) {
    if (history.state != null) {
        history.back();
    };
    $('body').removeClass(function(i, className) {
        return (className.match(/(.)*\-\-expanded*/) || []).join(' ') + ' show-nav';
    });
});

// The 'close section' button on the page (<-)
$('.js-close-section-button').on('click', function() {
    history.back();
});
