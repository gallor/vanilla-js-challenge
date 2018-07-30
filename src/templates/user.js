export default function userTemplate() {
    return "<div class='user'>" +
        "<img src='<%= obj.imgUrl %>' />" +
        "<span class='user-name'><%= obj.username %></span>" +
    "</div>"
}