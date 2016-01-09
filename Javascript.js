
$(function(){
var projects = [];
var $newProject =


function Project (title, description, date) {

this.title = title;
this.description = description;
this.date = tuesday;
}

/*Converting project object to HTML before displaying on site*/

Project.prototype.toHtml = function () {
var $newProject = $('.projectClass').clone();

/*Populating the project li element that has class of .projectClass with most current project info: title, description, date */

$newProject.find('.projectClass').text(this.title);
$newProject.find('.projectClass').text(this.description);
$newProject.find('.projectClass').text(this.date);
};





var projectOne = new Project('landing Page', 'Lake Tahoe Landing Page', '10/14/16');

projectOne.toHtml('.projectClass');















//
//
// projectData.forEach(function(ele) {
// projects.push(new Project(ele));
//
// project.forEach(function(a){
// $('.projectClass').append(li.toHtml())




    // projectData.forEach(function(ele) {
    // projects.push(new Project(ele));
    //
    // project.forEach(function(a){
    // $('.projectClass').append(li.toHtml())





});
