
module.exports = {

    name: "HTML template",

    params: ["FileName", "Title", "Body"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: config["FileName"],  sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
