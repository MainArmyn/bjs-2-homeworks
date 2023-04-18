function compareArrays(arr1, arr2) {
    let result=arr1.every((item,index,arr) => item===arr2[index] && arr.length===arr2.length);
    return result;
  }
  function getUsersNamesInAgeRange(users, gender) {
    let result=users.filter(user => user.gender===gender).reduce((acc,el,index,arr) => {
      acc=acc+el.age;
      if (index===arr.length-1) {
        return acc/arr.length;
      } else {
        return acc;
      }
    }, 0);
    return result;
  }