//optional chaining
let user = {};
// alert(user.address ? user.address.street : undefined);
// alert( user.address && user.address.street );
// alert(user?.address?.street);
alert(user?.address?.street ?? "street is not available");

//other ?.() and ?.[]

let userAdmin = {
  admin() {
    alert("I am Eric");
  },
};
let userGuest = {};
userAdmin.admin?.(); // I am Eric
userGuest?.admin?.(); // undefined

let key = "firstName";
let user1 = {
 firstName: "Hoi Dan IT"
};
let user2 = null;
alert( user1?.[key] ); // Hoi Dan IT
alert( user2?.[key] ?? "User not found" ); // User not found

// obj?.prop – returns obj.prop if obj exists, otherwise undefined.
// obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
// obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.