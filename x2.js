bufx2=[]
for (var j=0;j<4;j++)
for (var i=0;i<13;i++)
{
xx=0.9235-(0.0705+0.006)*i
yy=0.725-(0.22+0.004)*j
x=0.994-(0.0705+0.006)*i
y=0.945-(0.22+0.004)*j
bufx2[bufx2.length] = -1.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = x
bufx2[bufx2.length] = y

bufx2[bufx2.length] = -1.0
bufx2[bufx2.length] = -1.0
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = x//1
bufx2[bufx2.length] = yy//0

bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = xx//0
bufx2[bufx2.length] = y//1

bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = xx//0
bufx2[bufx2.length] = y//1

bufx2[bufx2.length] = -1.0
bufx2[bufx2.length] = -1.0
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = x//1 
bufx2[bufx2.length] = yy//0

bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = -1.0
bufx2[bufx2.length] = 2.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 0.0
bufx2[bufx2.length] = 1.0
bufx2[bufx2.length] = xx//0
bufx2[bufx2.length] = yy//0
}