export function loadPage(pageID) {
  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    });
  } else {
    $.get(`pages/houses.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    });
  }
}
