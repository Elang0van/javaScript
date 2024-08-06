const obj = {
    names: '',
    password: '',
    id: '' ,
    data: [],
  
    add: function(name, password, id) {
      this.names = name;
      this.password = password;
      this.id = id;
  
    
      this.data.push({ names: name, password: password, id: id });
  
    },
  
    get: function(id) {
    
      const result = this.data.find(item => item.id === id);
  
      if (result) {
        return result;
      } else {
        return 'Data not found';
      }
    },
  
    list: function() {
        let listString = '';
        this.data.forEach(item => {
          listString += `name: ${item.names}\npassword: ${item.password}\nid: ${item.id}\n\n`;
        });
        return listString.trim();
  }
}
  

  obj.add('elango', '1122', '1001');
  obj.add('panneer', '1133', '1002');
  obj.add('ace', '1122', '1001');
  obj.add('arun','1144','1003')
  obj.add();
  console.log(obj.list()); 
  console.log(obj.get('1001')); 
  console.log(obj.get('1003')); 

  console.log(obj.list())