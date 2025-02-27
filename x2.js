class card
{
    constructor(value,mast,iter,x,xx,y,yy)
    {
        this.value = value
        this.mast = mast
        this.iter = iter
        this.x = x
        this.xx = xx
        this.y = y
        this.yy = yy
    }
}
cards=[]
bufx2=[]
for (var j=0;j<4;j++)
for (var i=0;i<13;i++)
{
    //xx=0.9235-(0.0705+0.006)*i
    xx=(0.926-(0.0705+0.006)*i)/2.0
//yy=0.725-(0.22+0.004)*j
yy=0.942-(0.0497+0.0009)*j
//x=0.994-(0.0705+0.006)*i
x=(1.0-(0.0705+0.006)*i)/2.0
//y=0.945-(0.22+0.004)*j
y=0.991-(0.0497+0.0009)*j
cards[13*j+i] = new card(i==0?13:i,j==0?'P':j==1?'K':j==2?'B':'C',13*j+i,x,xx,y,yy)

bufx2[bufx2.length] = -0.9+(0.35)*i
bufx2[bufx2.length] = 0.75
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = xx//x
bufx2[bufx2.length] = y

bufx2[bufx2.length] = -0.9+(0.35)*i
bufx2[bufx2.length] = -0.75
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = xx//x
bufx2[bufx2.length] = yy//0

bufx2[bufx2.length] = -0.6+(0.35)*i
bufx2[bufx2.length] = 0.75
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = x//xx
bufx2[bufx2.length] = y//1

bufx2[bufx2.length] = -0.6+(0.35)*i
bufx2[bufx2.length] = 0.75
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = x//xx
bufx2[bufx2.length] = y//1

bufx2[bufx2.length] = -0.9+(0.35)*i
bufx2[bufx2.length] = -0.75
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = xx//x
bufx2[bufx2.length] = yy//0

bufx2[bufx2.length] = -0.6+(0.35)*i
bufx2[bufx2.length] = -0.75
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = x//xx
bufx2[bufx2.length] = yy//0
}

console.log(cards)