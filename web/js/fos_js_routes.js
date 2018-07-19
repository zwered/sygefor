fos.Router.setData({"base_url":"","routes":{"email.search":{"tokens":[["text","\/email\/search"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"email.view":{"tokens":[["variable","\/","\\d+","id"],["text","\/email\/view"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"taxonomy.terms_order":{"tokens":[["text","\/terms\/order"],["variable","\/","[^\/]++","vocabulary"],["text","\/admin\/taxonomy"]],"defaults":[],"requirements":{"_method":"POST"},"hosttokens":[["text","localhost"]]},"taxonomy.get":{"tokens":[["variable","\/","[^\/]++","vocabularyId"],["text","\/admin\/taxonomy\/get_terms"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"user.view":{"tokens":[["variable","\/","\\d+","id"],["text","\/admin\/users"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"user.edit":{"tokens":[["text","\/edit"],["variable","\/","\\d+","id"],["text","\/admin\/users"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"user.account":{"tokens":[["text","\/admin\/users\/account"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"user.access_rights":{"tokens":[["text","\/access-rights"],["variable","\/","\\d+","id"],["text","\/admin\/users"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"sygefor_core.batch_operation.execute":{"tokens":[["text","\/execute"],["variable","\/","[^\/]++","id"],["text","\/batchoperation"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"sygefor_core.batch_operation.modal_config":{"tokens":[["variable","\/","[^\/]++","service"],["text","\/batchoperation\/modalconfig"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"sygefor_core.batch_operation.get_file":{"tokens":[["variable","\/","[^\/]++","filename"],["text","\/as"],["variable","\/","[^\/]++","file"],["text","\/get"],["variable","\/","[^\/]++","service"],["text","\/batchoperation"]],"defaults":{"filename":null},"requirements":[],"hosttokens":[["text","localhost"]]},"core.entity":{"tokens":[["text","\/entity"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"core.search":{"tokens":[["text","\/search"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"inscription.search":{"tokens":[["text","\/inscription\/search"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"inscription.view":{"tokens":[["text","\/view"],["variable","\/","\\d+","id"],["text","\/inscription"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"inscription.create":{"tokens":[["variable","\/","[^\/]++","session"],["text","\/inscription\/create"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"inscription.delete":{"tokens":[["text","\/remove"],["variable","\/","[^\/]++","id"],["text","\/inscription"]],"defaults":[],"requirements":{"_method":"POST"},"hosttokens":[["text","localhost"]]},"material.add":{"tokens":[["variable","\/","[^\/]++","isPublic"],["variable","\/","[^\/]++","material_type"],["variable","\/","[^\/]++","entity_type"],["text","\/add"],["variable","\/","[^\/]++","entity_id"],["text","\/material"]],"defaults":{"isPublic":false},"requirements":[],"hosttokens":[["text","localhost"]]},"material.get":{"tokens":[["text","\/get\/"],["variable","\/","[^\/]++","id"],["text","\/material"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"material.remove":{"tokens":[["text","\/remove\/"],["variable","\/","[^\/]++","id"],["text","\/material"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"organization.edit":{"tokens":[["text","\/edit"],["variable","\/","\\d+","id"],["text","\/admin\/organizations"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"participation.search":{"tokens":[["text","\/participation\/participation\/search"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"participation.add":{"tokens":[["text","\/add"],["variable","\/","[^\/]++","session"],["text","\/participation"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"participation.edit":{"tokens":[["text","\/edit"],["variable","\/","\\d+","id"],["text","\/participation"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"participation.remove":{"tokens":[["variable","\/","[^\/]++","participation"],["text","\/remove"],["variable","\/","[^\/]++","session"],["text","\/participation"]],"defaults":[],"requirements":{"_method":"POST"},"hosttokens":[["text","localhost"]]},"session.create":{"tokens":[["variable","\/","[^\/]++","training"],["text","\/training\/session\/create"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"session.evaluation":{"tokens":[["text","\/evaluation"],["variable","\/","\\d+","id"],["text","\/training\/session"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"session.evaluations":{"tokens":[["text","\/evaluations"],["variable","\/","[^\/]++","id"],["text","\/training\/session"]],"defaults":[],"requirements":{"_format":"csv|xls|xlsx","_method":"GET"},"hosttokens":[["text","localhost"]]},"session.search":{"tokens":[["text","\/training\/session\/search"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"session.view":{"tokens":[["text","\/view"],["variable","\/","\\d+","id"],["text","\/training\/session"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"session.duplicate":{"tokens":[["variable","\/","[^\/]++","inscriptionIds"],["variable","\/","\\d+","id"],["text","\/training\/session\/duplicate"]],"defaults":{"inscriptionIds":null},"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"session.remove":{"tokens":[["text","\/remove"],["variable","\/","\\d+","id"],["text","\/training\/session"]],"defaults":[],"requirements":{"id":"\\d+","_method":"POST"},"hosttokens":[["text","localhost"]]},"trainee.create":{"tokens":[["text","\/trainee\/create"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"trainee.toggleActivation":{"tokens":[["text","\/toggleActivation"],["variable","\/","\\d+","id"],["text","\/trainee"]],"defaults":[],"requirements":{"id":"\\d+","_method":"POST"},"hosttokens":[["text","localhost"]]},"trainee.changepwd":{"tokens":[["text","\/changepwd"],["variable","\/","[^\/]++","id"],["text","\/trainee"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"trainee.search":{"tokens":[["text","\/trainee\/search"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"trainee.view":{"tokens":[["text","\/view"],["variable","\/","\\d+","id"],["text","\/trainee"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"trainee.delete":{"tokens":[["text","\/remove"],["variable","\/","[^\/]++","id"],["text","\/trainee"]],"defaults":[],"requirements":{"_method":"POST"},"hosttokens":[["text","localhost"]]},"trainee.changeorg":{"tokens":[["text","\/changeorg"],["variable","\/","[^\/]++","id"],["text","\/trainee"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"trainer.search":{"tokens":[["text","\/trainer\/search"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"trainer.create":{"tokens":[["text","\/trainer\/create"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"trainer.view":{"tokens":[["text","\/view"],["variable","\/","\\d+","id"],["text","\/trainer"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"trainer.changeorg":{"tokens":[["text","\/changeorg"],["variable","\/","[^\/]++","id"],["text","\/trainer"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"trainer.delete":{"tokens":[["text","\/remove"],["variable","\/","[^\/]++","id"],["text","\/trainer"]],"defaults":[],"requirements":{"_method":"POST"},"hosttokens":[["text","localhost"]]},"training.view":{"tokens":[["text","\/view"],["variable","\/","\\d+","id"],["text","\/training"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"module.edit":{"tokens":[["text","\/edit"],["variable","\/","\\d+","id"],["text","\/trainingmodule"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[["text","localhost"]]},"training.duplicate":{"tokens":[["variable","\/","[^\/]++","type"],["variable","\/","[^\/]++","id"],["text","\/training\/duplicate"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"training.balancesheet":{"tokens":[["variable",".","csv|xls|xlsx","_format"],["text","\/bilan"],["variable","\/","[^\/]++","id"],["text","\/training"]],"defaults":{"_format":"xls"},"requirements":{"_format":"csv|xls|xlsx","_method":"GET"},"hosttokens":[["text","localhost"]]},"training.search":{"tokens":[["text","\/training\/search"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"training.create":{"tokens":[["variable","\/","[^\/]++","type"],["text","\/training\/create"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"training.remove":{"tokens":[["text","\/remove"],["variable","\/","\\d+","id"],["text","\/training"]],"defaults":[],"requirements":{"id":"\\d+","_method":"POST"},"hosttokens":[["text","localhost"]]},"training.choosetypeduplicate":{"tokens":[["text","\/training\/choosetypeduplicate"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"report.index":{"tokens":[["text","\/report"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]},"report.download":{"tokens":[["text","\/report\/download"]],"defaults":[],"requirements":[],"hosttokens":[["text","localhost"]]}},"prefix":"","host":"localhost","scheme":"http"});