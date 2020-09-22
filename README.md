# Validation resources for the SHACL validator for SHACL shapes

The `resources` folder contains the validator's configuration and SHACL shapes.
The `dev` folder contains an HTML file that can be used for the easier processing the validator's banner HTML. Before use
in the validator this needs to be compressed into a single line for inclusion in `config.properties`.

## Plugin extension

The validator's configuration relies on a plugin JAR located in folder `resources/plugin`. This is generated and committed automatically here by Jenkins, building from repository https://citnet.tech.ec.europa.eu/CITnet/stash/projects/ITB/repos/docker-validator-shacl-plugin/browse.