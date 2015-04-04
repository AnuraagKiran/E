
angular.module('items', []).controller('itemdisplay', function($scope) {
    $scope.names1 = [
        {id:0,qty:1,name:'Tomatoes',q:0.5,q1:0.5,q2:1,price:80,image:'nature.jpg'},
        {id:1,qty:1,name:'Onions',q:0.5,q1:0.5,q2:1,price:50,image:'nature.jpg'},
        {id:2,qty:1,name:'Potatoes',q:0.5,q1:0.5,q2:1,price:100,image:'nature.jpg'},
        {id:3,qty:1,name:'Potatoes',q:0.5,q1:0.5,q2:1,price:100,image:'nature.jpg'},
        {id:4,qty:1,name:'Potatoes',q:0.5,q1:0.5,q2:1,price:100,image:'nature.jpg'},
        {id:5,qty:1,name:'Potatoes',q:0.5,q1:0.5,q2:1,price:100,image:'nature.jpg'},
        {id:6,qty:1,name:'Spinach',q:0.5,q1:0.5,q2:1,price:200,image:'nature.jpg'}
        
    ];
    $scope.$watchGroup(['check1','check2','check3','check4','check5'], function() {
       changep();
   });
    $scope.$watchGroup(['check6','check7','check8','check9','check10'], function() {
       changeq();
   });
    $scope.info={
      w: 0.5,
      qty: 1
    };
    function changep()
    {
      $scope.max=new Array(0,0,0,0,0);
      $scope.min=new Array(20000,20000,20000,20000,20000);
    $scope.t=false;
    if($scope.check1==true)
    {$scope.max[0]=20;
     $scope.min[0]=0; 
    //if($scope.t==false){$scope.min=0;$scope.t=true;}
    }
    if($scope.check2==true)
    {
      $scope.max[1]=50;
      $scope.min[1]=21;
    //if($scope.t==false){$scope.min=21;$scope.t=true;}
    }
    if($scope.check3==true)
    {
      $scope.max[2]=100;
      $scope.min[2]=51;
    //if($scope.t==false){$scope.min=51;$scope.t=true;}
    }
    if($scope.check4==true)
    {
      $scope.max[3]=200;
      $scope.min[3]=101;
   //if($scope.t==false){$scope.min=101;$scope.t=true;}
    }
    if($scope.check5==true)
    {
      $scope.max[4]=20000;
      $scope.min[4]=201;
    //if($scope.t==false){$scope.min=201;$scope.t=true;}
    }
    }
    function changeq()
    {
    $scope.maxq=20000;
    $scope.minq=0;
    $scope.tq=false;
    if($scope.check6==true)
    {$scope.maxq=0.499;
    if($scope.tq==false){$scope.minq=0;$scope.tq=true;}
    }
    if($scope.check7==true)
    {
      $scope.maxq=.999;
    if($scope.tq==false){$scope.minq=0.5;$scope.tq=true;}
    }
    if($scope.check8==true)
    {
      $scope.maxq=2;
    if($scope.tq==false){$scope.minq=1;$scope.tq=true;}
    }
    if($scope.check9==true)
    {
      $scope.maxq=3;
   if($scope.tq==false){$scope.minq=2;$scope.tq=true;}
    }
    if($scope.checkq0==true)
    {
      $scope.maxq=20000;
    if($scope.tq==false){$scope.minq=3;$scope.tq=true;}
    }
    }
    $scope.values = [
    {
  id: 1,
  label: 'Price-High to Low',
  sub: 'price',
  rev:true
  
}, 
{
  id: 2,
  label: 'Price-Low to High',
  sub: 'price',
  rev:false
  
},{
  id: 3,
  label: 'Alphabetical',
  sub: 'name',
  rev:false
  
}
];
$scope.addeditems=[
{ id:0,
  qty:0 ,
  nam:'-',
  w:0 ,
  price:0 ,

}];
$scope.i=-1;
$scope.add=function(qty,name,w,price){
//$scope.itemd=$scope.names1[1];
if($scope.i==-1)$scope.addeditems.splice(0,1);
$scope.addeditems.push({ id:$scope.i+1,qty: qty,nam:name ,w: w,price: price});
$scope.i++;
$scope.tprice=$scope.tprice+price;
};
$scope.remove=function(y)
{ var p=0;var value;
  for(p=0;p<$scope.addeditems.length;p++)
  {
    if($scope.addeditems[p].id==y)
     value=$scope.addeditems.splice(p,1)[0]; 
  }
  
  $scope.i--;
  if($scope.i==-1){$scope.addeditems.push({ id:0,qty: 0,nam:'-' ,w: 0,price: 0});$scope.tprice=0;}
  else{
  $scope.tprice=$scope.tprice-value.price;}
}
$scope.tprice=0;
/*$scope.qtyval=[
{id:1,label:'0.5 kg',val:0.5},
{id=2,label:'1 kg',val:1}
];
$scope.q=0.5;
$scope.qty=$scope.qtyval[0];
if($scope.qty.label=='0.5 kg')
$scope.q=0.5;
else if($scope.qty.label=='1 kg')
$scope.q=1; */

$scope.selected =$scope.values[0];
$scope.s='price';
    //var e = document.getElementById("cat");
    //var strUser = e.options[e.selectedIndex].text;
   // if($scope.selected1.label=='Price')
    if($scope.selected.label=='Price')
    $scope.s='price';
    else 
    $scope.s='name';
});