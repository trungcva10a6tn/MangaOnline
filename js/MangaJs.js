/**
 * Created by trung on 04/05/2017.
 */
function auto_load(id,url_manga) {
$.ajax({
    success: function(data) {
        $("#"+id).html(data);
    },
    url: url_manga,
    error: function() {
        alert("bạn bị mất mạng");
    }
});
}