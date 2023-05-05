$(function() {
  // クリックされたときの動き
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

// 800というのは800ミリ秒（つまり0.8秒）を表している