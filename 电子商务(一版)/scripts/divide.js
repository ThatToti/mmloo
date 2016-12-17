function showList(){
    if(!document.getElementsByClassName) return false;
    if(!document.getElementsByClassName("showList")) return false;

    var showLists=document.getElementsByClassName("showList");
    var dividedLists=document.getElementsByClassName("dividedList");

    showLists[0].onmouseover=function(){
      dividedLists[0].style.display="block";
      dividedLists[0].onmouseover=function(){
        this.style.display="block";
      }
      dividedLists[0].onmouseout=function(){
        this.style.display="none";
      }
    }
    showLists[0].onmouseout=function(){
        dividedLists[0].style.display="none";
    }

    showLists[1].onmouseover=function(){
      dividedLists[1].style.display="block";
      dividedLists[1].onmouseover=function(){
        this.style.display="block";
      }
      dividedLists[1].onmouseout=function(){
        this.style.display="none";
      }
    }
    showLists[1].onmouseout=function(){
        dividedLists[1].style.display="none";
    }
    
    showLists[2].onmouseover=function(){
      dividedLists[2].style.display="block";
      dividedLists[2].onmouseover=function(){
        this.style.display="block";
      }
      dividedLists[2].onmouseout=function(){
        this.style.display="none";
      }
    }
    showLists[2].onmouseout=function(){
        dividedLists[2].style.display="none";
    }
}
window.onload=showList();