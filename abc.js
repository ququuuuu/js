$("#editor").trumbowyg({ urlProtocol: !0, minimalLinks: !0, autogrow: !0, changeActiveDropdownIcon: !0, semantic: !0, removeformatPasted: !0, autogrowOnEnter: !0, btnsDef: { align: { dropdown: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"], ico: "justifyLeft" } }, btns: [["fontsize"], ["align"], ["strong", "em", "underline"], ["link"], ["unorderedList", "orderedList"], ["removeformat"], ["viewHTML"], ["fullscreen"]], plugins: { fontsize: { sizeList: ["12px", "14px", "16px"] } } });


document.addEventListener("DOMContentLoaded", function (e) { $("#editor").trumbowyg("html"), $("#editor").trumbowyg("html", '<p>abd</p>') });


$('#website-name').keyup(function () {
  $('.website_name').html(this.value);
  $('.company_name').html(this.value);
});
$('#company-name').keyup(function () {
  $('.company_name').html(this.value);
});
$('#company-country').keyup(function () {
  $('.company_country').html(this.value);
});
$('#website-email').keyup(function () {
  $('.website_email').attr('href', 'mailto:' + this.value);
  $('.website_email').html(this.value);
});

$('#website-url').keyup(function () {
  let original_url = this.value;
  let stripped_url = original_url.replace(/https?:\/\//i, '');
  let full_url = "https://" + stripped_url;
  $('.website_url').html(stripped_url);
  $('.website_url').prop('href', full_url);
});


document.addEventListener("DOMContentLoaded", function (e) {
  var t = new Date; t.setDate(t.getDate()), $("#date").html(t.getDate() + " " + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t.getMonth()] + " " + t.getFullYear());
});


function CopyToClipboard(e) { var t, o, n = document, d = n.getElementById(e); n.body.createTextRange ? ((t = n.body.createTextRange()).moveToElementText(d), t.select(), t.mouseup()) : window.getSelection && (o = window.getSelection(), (t = n.createRange()).selectNodeContents(d), o.removeAllRanges(), o.addRange(t)), document.execCommand("copy"), document.getElementById("copy-button").value = "Copied" };


const toastTrigger = document.getElementById('copy-button')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
    $('#editor').addClass('overlay').delay(2500).queue(function () {
      $(this).removeClass('overlay');
      $(this).dequeue();
    });
    $(".progress-bar").animate({
      width: "100%",
    }, 500);


    $('.copying').delay(1000).queue(function () {
      $(this).html('Done ✔️');
    });
  })
}
