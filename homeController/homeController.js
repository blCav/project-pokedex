exports.sendIndex = (req, res) => {
    res.render('index');
};

exports.sendPokedex = (req, res) => {
    res.render('pokedex');
};

exports.sendCredit = (req, res) => {
    res.render('credit'); 
};