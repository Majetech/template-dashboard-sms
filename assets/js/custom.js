$(document).ready(function () {
    count = 0;
    $("#btn_ajoute_row").on('click', (function (e) {
        count += 1;
        $("#row-div .ligne:last") .after("<div class=\"row ligne\" id=\"ligne-"+count+"\">\n"+
            "                                    <div class=\"col-lg-1 col-md-1 col-sm-1   \">\n" +
            "                                        <div class=\"form-group row m-2\">\n" +
            "                                            <a href=\"javascript:void(0)\" class=\"btn \" id=\"remove-ligne-"+count+"\"><span\n" +
            "                                                        class=\"font-20 \">-</span></a>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                               <script type=\"text/javascript\">\n" +
            "    $(\"#remove-ligne-"+count+"\").on('click', (function (e) {\n" +
            "        $(\"#ligne-"+count+"\").remove();\n" +
            "    }));\n" +
            "</script> </div>");
    }));
    var dataTable1 = $('#table_lister_commande_server').DataTable({
        "paging": true,
        "processing": true,
        "serverSide": true,
        "orderable": false,
        "order": [],
        "info": true,
        "ajax": {
            url: "app/DefaultApp/traitements/datatables.php?commandes",
            type: "POST"
        },
        "columnDefs": [
            {
                "targets": [0,1, 2, 3],
                "orderable": false,
            }
        ],
    });

    $("#session_id").on( "change", function() {
        var session = $("#session_id").val();
        $.ajax({
            url: "app/DefaultApp/traitements/traitements.php?session_val="+session,
            type: "GET",
            data: "",
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                location.reload();
            }
        });
    } );
});