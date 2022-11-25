var admins = [
    {username:"Nibu", password:"password"},
    {username:"Nibras", password:"welcome"}
];

module.exports.login = (req,res,next) => {
    username = req.params.username;
    password = req.params.password;
    var index = admins.findIndex((element) => (element.username === username && element.password === password));

    if(index !== undefined)
        res.send("Logged in successfully");
    else
        res.send("User doesnot exist");
};