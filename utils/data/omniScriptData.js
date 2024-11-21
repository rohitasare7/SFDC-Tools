// Vars
const DATA_MAPPER = "Data Mapper";
const INTEGRATION_PROCEDURE = "Integration Procedure";
//Get Action Type label
const actionLabels = [
  {
    actionType: "vlocity_cmt.IntegrationProcedureService",
    actionLabel: INTEGRATION_PROCEDURE,
    elementLabel: "IP",
  },
  {
    actionType: "vlocity_cmt.DefaultDROmniScriptIntegration",
    actionLabel: DATA_MAPPER, // sMethodName : invokeOutboundDR , invokeInboundDR, invokeTransformDR
    elementLabel: DATA_MAPPER,
  },
  {
    actionType: "vlocity_cmt.DefaultOmniscriptApexRestService",
    actionLabel: "HTTP Action", // sMethodName : generateApexRestRequest
    elementLabel: "API",
  },
  {
    actionType: "vlocity_cmt.DefaultOmniScriptMatrix",
    actionLabel: "Matrix Action",
    elementLabel: "Matrix Name",
  },
  {
    actionType: "ApexRemoteClass",
    actionLabel: "Remote Action",
    elementLabel: "Apex Class",
  },
  //Std Runtime
  {
    actionType: "omnistudiocore.IPService",
    actionLabel: INTEGRATION_PROCEDURE,
    elementLabel: "IP",
  },
  {
    actionType: "omnistudiocore.DefaultDROmniScriptIntegration",
    actionLabel: DATA_MAPPER, // sMethodName : invokeOutboundDR , invokeInboundDR, invokeTransformDR
    elementLabel: DATA_MAPPER,
  },
  {
    actionType: "omnistudiocore.DefaultOmniscriptApexRestService",
    actionLabel: "HTTP Action", // sMethodName : generateApexRestRequest
    elementLabel: "API",
  },
];

// Method to get the action label based on the actionType
const getActionData = (actionType) => {
  const action = actionLabels.find((item) => item.actionType === actionType);
  return action ? action : "Action type not found";
};

export { getActionData };