function init()
{
     //全台圖
     var taiwan=document.getElementById('Taiwan');
     taiwan.innerHTML='<img src="./taiwan/Taiwan.png" id="Whole"></img>';

     var citytable=document.getElementById('city');
     //北部
     var norBtn=document.getElementById('North');
     var NorthClick=function ()
     {//按下就轉圖+市出現
          taiwan.innerHTML='<img src="./taiwan/Taiwan_北.png" id="North"></img>';//全台圖->北部圖
          citytable.innerHTML
          ='<ul><li><a href="water.php?area=臺北市">臺北市</a></li><br><li><a href="water.php?area=新北市">新北市</a></li><br><li><a href="water.php?area=基隆市">基隆市</a></li><br><li><a href="water.php?area=新竹市">新竹市</a></li><br><li><a href="water.php?area=新竹縣">新竹縣</a></li><br><li><a href="water.php?area=桃園市">桃園市</a></li><br><li><a href="water.php?area=宜蘭縣">宜蘭縣</a></li></ul>'; 
     }
     norBtn.addEventListener("click",NorthClick);
     //中部
     var CenBtn=document.getElementById('Center');
     var CenterClick=function ()
     {//按下就轉圖+市出現
         
          taiwan.innerHTML='<img src="./taiwan/Taiwan_中.png" id="Center"></img>';//全台圖->中部圖
          citytable.innerHTML
          ='<ul><li><a href="water.php?area=臺中市">臺中市</a></li><br><li><a href="water.php?area=苗栗縣">苗栗縣</a></li><br><li><a href="water.php?area=彰化縣">彰化縣</a></li><br><li><a href="water.php?area=南投縣">南投縣</a></li><br><li><a href="water.php?area=雲林縣">雲林縣</a></li><br></ul>';
     }
     CenBtn.addEventListener("click",CenterClick);
     //南部
     var SouthBtn=document.getElementById('South');
     var SouthClick=function ()
     {//按下就轉圖+市出現
          taiwan.innerHTML='<img src="./taiwan/Taiwan_南.png" id="South"></img>';//全台圖->南部圖
          citytable.innerHTML
          ='<ul><li><a href="water.php?area=高雄市">高雄市</a></li><br><li><a href="water.php?area=臺南市">臺南市</a></li><br><li><a href="water.php?area=嘉義市">嘉義市</a></li><br><li><a href="water.php?area=嘉義縣">嘉義縣</a></li><br><li><a href="water.php?area=屏東縣">屏東縣</a></li></ul>';
     }
     SouthBtn.addEventListener("click",SouthClick);
     //東部
     var EastBtn=document.getElementById('East');
     var EastClick=function ()
     {//按下就轉圖+市出現
          taiwan.innerHTML='<img src="./taiwan/Taiwan_東.png" id="East"></img>';//全台圖->東部圖
          citytable.innerHTML
          ='<ul><li><a href="water.php?area=花蓮縣">花蓮縣</a></li><br><li><a href="water.php?area=臺東縣">臺東縣</a></li></ul>';
     }
     EastBtn.addEventListener("click",EastClick);
}