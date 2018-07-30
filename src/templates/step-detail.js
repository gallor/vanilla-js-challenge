export default function stepDetail() {
    return "<div class='step-details'>" +
    "<div class='text-block'>"+
        "<span class='edit subtext'>Step Name</span>" +
        "<span class='large text'><%= obj.displayName %></span>" +
    "</div>" +
    "<div class='text-block'>" +
        "<span class='edit subtext'>Instructions</span>" +
        "<span class='text'><%= obj.description %></span>" +
    "</div>" +
    "<div class='block'>" +
        "<div class='toggle users subtext'><span class='title'>Assign User (<%= obj.userCount %>)</span></div>" +
        "<div class='duration'>" +
            "<span class='title toggle subtext'>Maximum Duration</span>" +
            "<span class='text'><%= obj.maximumDuration %></span>" +
        "</div>" +
        "<div class='dependencies'>" +
            "<span class='title toggle  subtext'>Dependencies (<%= obj.dependsOnCount %>)</span>" +
            "<span class='text'><% if (obj.dependsOn) { %>Depends on <%= obj.dependsOn %><% } %></span>" +
        "</div>" +
        "<div class='conditions'>" +
            "<span class='title toggle  subtext'>Conditions (<%= obj.conditionsCount %>)</span>" +
            "<% _.forEach(obj.conditions, function (condition) { %><div class='text'><span class='field-text text'><%= condition %></span><% }) %></div>" +
        "</div>" +
        "<div class='fields'>" +
            "<span class='title toggle subtext'>Fields</span>" +
            "<% _.forEach(obj.fields, function (field) { %><div class='text'><span class='field-text'><%= field.displayName %></span><input id='<%= field.fieldName %>' type='text'><% }) %></div>" +
        "</div>" +
        "</div>" +
    "</div>"
}