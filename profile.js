var job = [{
    "Title": "Software Developer Intern",
    "Company": "Nature Sunshine/ Synergy",
    "Location": "Lehi, Utah",
    "Description": [
        "Debugged and fixed website bugs",
        "Web development using Angular, JavaScript, CSS, and HTTP",
        "Created CRUD application in MongoDB for Azure DocumentDB",
        "Debugged and fixed website mobile phone language and display issues"
    ]
}]


$("#toggle-profile").click(function () {
    $("#profile").toggle();
})

function changeToHome() {
    var hideResume = document.getElementById("resumeTab");
    hideResume.style.display = "none";
    var hidePictures = document.getElementById("picturesTab");
    hidePictures.style.display = "none";
    var showHome = document.getElementById("homeTab");
    showHome.style.display = "block";
}
function changeToResume() {
    var hideHome = document.getElementById("homeTab");
    hideHome.style.display = "none";
    var hidePictures = document.getElementById("picturesTab");
    hidePictures.style.display = "none";
    var showResume = document.getElementById("resumeTab");
    showResume.style.display = "block";
}
function changeToPictures() {
    var hideHome = document.getElementById("homeTab");
    hideHome.style.display = "none";
    var hideResume = document.getElementById("resumeTab");
    hideResume.style.display = "none";
    var showPictures = document.getElementById("picturesTab");
    showPictures.style.display = "block";
}

function RenderService(data) {
    this.data = data;

    this.renderExperience = function () {
        this.data.forEach(function (exp) {
            $('#title').each(function () {
                $(this).append(exp["Title"]);
            });
            $('#company').each(function () {
                $(this).append(exp["Company"]);
            });
            $('#location').each(function () {
                $(this).append(exp["Location"]);
            });
            $.each(exp["Description"], function (index, value) {
                $('#description').append("<li>" + value + "</li>");
            })
        });
    }
}
var svc = new RenderService(job);
svc.renderExperience();