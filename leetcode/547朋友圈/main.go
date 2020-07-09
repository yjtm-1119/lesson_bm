package main
import "fmt"
func findCircleNum(M [][]int) int {
	N:=len(M)
	fmt.Printf("%d",N)
	res:=N//最多有多少个朋友圈
	//N--
	friend:=make([]int,res)//res是长度
	for i:=0;i<res;i++{
		friend[i]=i//0,1,2
	}
	union:=func(s,d int){
		for i:=range friend{
			//同化一下
			if friend[i]==s{
				friend[i]=d
			}
		}
	}
	for i:=0;i<N;i++{
		for j:=0;j<N;j++{
			if M[i][j]==1{
				if friend[i]!=friend[j]{
					res--
					union(friend[i],friend[j])
				}
			}
		}
	}
	return res
}
func main()  {
	count := findCircleNum([][]int{
		{1,1,0},
		{1,1,1},
		{0,0,1},
	})
	fmt.Printf("朋友圈的数量是%d",count);
}