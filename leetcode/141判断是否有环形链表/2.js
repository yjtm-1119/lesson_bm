var hasCycle = function(head) {
  try{
      JSON.stringify(head);
      return false;
  }
  catch(err){
      return true;
  }
};
///JSON.stringify() 不能序列化含有循环引用的结构
