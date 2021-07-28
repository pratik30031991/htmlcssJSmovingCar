
m=0
var y;
function start()
{

    y= setInterval(run,100);
    
    function run()
        {
            if(m==1200)
            {
                clearInterval(x);
                m=0;    

            }else
            {
            m = m+5;
            var x = document.getElementById("img");
            x.style.marginLeft= m+"px";

            }
            
        }    

}

function stop()
{
        clearInterval(y);
}

function restart()
{
    clearInterval(y);
       var x = document.getElementById("img");
        x.style.marginLeft=0;
        m=0;

        y= setInterval(run,100);
    
        function run()
            {
                if(m==1200)
                {
                    clearInterval(x);
                    m=0;    
    
                }else
                {
                m = m+5;
                var x = document.getElementById("img");
                x.style.marginLeft= m+"px";
    
                }
                
            }    

}