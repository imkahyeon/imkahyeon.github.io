



function goBack(){
    location.href = "/";
}

$(".work-item-box ul li").click(function(){
    let chkVal = {
        url : `${$(this).attr("data-url")}`
    }
    const work_container = document.querySelector(".work-container");
    work_container.style.cssText = 
    `
            overflow-y : hidden;
            
    `;

    $(".preview-body iframe").attr("src",chkVal.url);
    $(".preview-work-modal").show();

})



$(".preview-work-modal").click(function(){
    $(this).hide();
    $(".work-container").css({
        "overflow-y" : "scroll",
        // "height" : "auto"
    })
    // location.reload()
})

$(".work-category li").click(function(){
    const clickIndex = $(this).index();
    $(".work-item-box > div").removeClass("on");
    $(".work-item-box > div").eq(clickIndex).addClass("on");
    
    
    
})