(($)=>{
  $("*").one("click", ()=>{
    let bgm = $("#bgm")[0];
    bgm.muted = false;
    bgm.play();
  });
})(jQuery);
