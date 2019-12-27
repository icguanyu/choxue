/* 瀑布流 */
/* 確保 dom 載入完畢後再初始化 masonry 否則初次載入會跑版*/

window.onload = $('.waterfall').masonry({
  itemSelector: '.item',
  columnWidth: '.item'
});
