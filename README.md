# Introduction

The current repository defines the configuration of the [SHACL shape validator](https://www.itb.ec.europa.eu/shacl/shacl/upload) provided by the [Interoperability Test Bed](https://interoperable-europe.ec.europa.eu/collection/interoperability-test-bed-repository/solution/interoperability-test-bed),
that allows validation of SHACL shapes against the [SHACL specification](https://www.w3.org/TR/shacl/), covering both core and
extended features. Besides validating against the specification, this validator also allows validation against best practices
curated by the Test Bed team.

This validator is a configuration of the Test Bed's [RDF validator](https://github.com/ISAITB/shacl-validator).

The service is accessible:
* Via UI at https://www.itb.ec.europa.eu/shacl/shacl/upload
* Via REST API at https://www.itb.ec.europa.eu/shacl/swagger-ui/index.html (use "shacl" when prompted for a "domain")
* Via SOAP API at https://www.itb.ec.europa.eu/shacl/soap/shacl/validation?wsdl

# Configuration

The validator's configuration is located under `resources`, and specifically within file `config.properties`. Any changes merged to this repository result in the live service being updated within 1-2 minutes.

Validation is driven through SHACL shapes (located under `shapes`), as well as by means of a [custom plugin](https://www.itb.ec.europa.eu/docs/guides/latest/creatingCustomValidatorPlugin/index.html) for assertions not possible through native SHACL. The resources for this custom plugin validator are available
[here](https://github.com/ISAITB/validator-resources-shacl-plugin).

# Running your own validator

You can replicate this validator on your own environment by following these steps:
1. Clone the current repository (in e.g. `MY_LOCAL_REPO`).
2. Start a new RDF validator instance by using the [isaitb/shacl-validator](https://hub.docker.com/r/isaitb/shacl-validator) Docker image, and providing the `resources` folder as the validator's resource root.

```
docker run -d --name my-validator -p 8080:8080 \
             -v /MY_LOCAL_REPO/resources:/validator/resources/ \
             -e validator.resourceRoot=/validator/resources/  \
             -e validator.domainName.resources=shacl
             isaitb/shacl-validator
```

Using the above command your validator will be available:
* Via UI at http://localhost:8080/shacl/shacl/upload
* Via REST API: http://localhost:8080/shacl/swagger-ui/index.html (use "shacl" when prompted for a "domain")
* Via SOAP API: http://localhost:8080/shacl/soap/shacl/validation?wsdl

# Licence

This configuration is shared using the [European Union Public Licence (EUPL) version 1.2](https://interoperable-europe.ec.europa.eu/sites/default/files/custom-page/attachment/eupl_v1.2_en.pdf).

# Legal notice

The authors of this repository and the resulting validator waive any and all liability linked to its usage or the interpretation of its results. In terms of data, the resulting validator does not harvest, collect or process in any way data that could be linked to the user or 
workstation.

# Contact

To get in touch for feedback or questions please send an email to [DIGIT-ITB@ec.europa.eu](mailto:DIGIT-ITB@ec.europa.eu).