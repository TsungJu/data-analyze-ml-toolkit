const path = require('path');
const ghpages = require('gh-pages');
const { Console } = require('console');

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/TsungJu/data-analyze-ml-toolset.git',
    message: 'First commit'
};

const callback = err => {
    if (err) console.error(err);
    else console.log('publish success');
}

ghpages.publish(path.resolve(__dirname,'../dist'),options,callback);
