import "./index.css";
import {getUsers, deleteUser} from "./api/usersApi";

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
       usersBody += `<tr>
            <td><a href="#" data-id="${user.id}" data-selector="delete-user">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        </tr>`;
    });

    global.document.querySelector("[data-selector=user-list]").innerHTML = usersBody;

    const deleteLinks = global.document.querySelectorAll("[data-selector=delete-user]");

    Array.from(deleteLinks, link => {
       link.onclick = (e) => {
           const element = e.target;
           e.preventDefault();
           deleteUser(element.getAttribute("data-id"));
           const row = element.parentNode.parentNode;
           row.parentNode.removeChild(row);
       }
    });
});
