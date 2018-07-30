export default function stepsOutlineTemplate() {
    return "<div class='step-outline'>" +
    "<span class='step-number'><%= obj.stepNumber %></span>" + 
    "<span class='step-name'><%= obj.displayName %></span>" + 
    "<span class='step-assigned'><% if (obj.assigned) { %>Assigned to <%= obj.assigned %><% } %></span>" + 
    "<span class='step-subtext'><% if (obj.dependsOn) { %>Depends on <%= obj.dependsOn %><% } %></span>" +
    "</div>"
}