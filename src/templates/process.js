export default function processTemplate() {
    return "<div class='process-wrapper'>" +
        "<div class='process-block open'>" +
        "<div class='text-block'>" +
            "<span class='edit subtext'>Edit Template</span>" + 
            "<span class='large text'><%= obj.displayName %></span>" + 
        "</div>" + 
        "<div class='text-block'>" +
            "<span class='edit subtext'>Description</span>" + 
            "<span class='text'><%= obj.description %></span>" + 
        "</div>" +
        "<div class='text-block'>" +
            "<span class='subtext'>Category</span>" + 
            "<span class='text'><%= obj.category %></span>" + 
        "</div>" +
        "</div>" +
        "<span class='toggle'>Collapse</span>" +
        "</div>"
}