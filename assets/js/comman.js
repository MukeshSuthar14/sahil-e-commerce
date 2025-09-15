
//datatable
$('#dataTable-1').DataTable(
    {
        autoWidth: true,
        responsive: true,
        "lengthMenu": [
            [10, 50, 100, -1],
            [25, 50, 100, "All"]
        ]
    });

$('.select2').select2(
    {
        theme: 'bootstrap4',
    });
$('.select2-multi').select2(
    {
        multiple: true,
        theme: 'bootstrap4',
    });

var editor = document.getElementById('editor');
if (editor) {
    var toolbarOptions = [
        [
            {
                'font': []
            }],
        [
            {
                'header': [1, 2, 3, 4, 5, 6, false]
            }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [
            {
                'header': 1
            },
            {
                'header': 2
            }],
        [
            {
                'list': 'ordered'
            },
            {
                'list': 'bullet'
            }],
        [
            {
                'script': 'sub'
            },
            {
                'script': 'super'
            }],
        [
            {
                'indent': '-1'
            },
            {
                'indent': '+1'
            }], // outdent/indent
        [
            {
                'direction': 'rtl'
            }], // text direction
        [
            {
                'color': []
            },
            {
                'background': []
            }], // dropdown with defaults from theme
        [
            {
                'align': []
            }],
        ['clean'] // remove formatting button
    ];
    var quill = new Quill(editor,
        {
            modules:
            {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        });
}

lightbox.option({
      'resizeDuration': 400,
      'wrapAround': true
});

toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "timeOut": "10000"
};