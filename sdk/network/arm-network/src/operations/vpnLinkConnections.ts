/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/vpnLinkConnectionsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VpnLinkConnections. */
export class VpnLinkConnections {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VpnLinkConnections.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.VpnLinkConnectionsListByVpnConnectionResponse>
   */
  listByVpnConnection(resourceGroupName: string, gatewayName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.VpnLinkConnectionsListByVpnConnectionResponse>;
  /**
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param callback The callback
   */
  listByVpnConnection(resourceGroupName: string, gatewayName: string, connectionName: string, callback: msRest.ServiceCallback<Models.ListVpnSiteLinkConnectionsResult>): void;
  /**
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByVpnConnection(resourceGroupName: string, gatewayName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVpnSiteLinkConnectionsResult>): void;
  listByVpnConnection(resourceGroupName: string, gatewayName: string, connectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListVpnSiteLinkConnectionsResult>, callback?: msRest.ServiceCallback<Models.ListVpnSiteLinkConnectionsResult>): Promise<Models.VpnLinkConnectionsListByVpnConnectionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        gatewayName,
        connectionName,
        options
      },
      listByVpnConnectionOperationSpec,
      callback) as Promise<Models.VpnLinkConnectionsListByVpnConnectionResponse>;
  }

  /**
   * Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VpnLinkConnectionsListByVpnConnectionNextResponse>
   */
  listByVpnConnectionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VpnLinkConnectionsListByVpnConnectionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByVpnConnectionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListVpnSiteLinkConnectionsResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByVpnConnectionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVpnSiteLinkConnectionsResult>): void;
  listByVpnConnectionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListVpnSiteLinkConnectionsResult>, callback?: msRest.ServiceCallback<Models.ListVpnSiteLinkConnectionsResult>): Promise<Models.VpnLinkConnectionsListByVpnConnectionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByVpnConnectionNextOperationSpec,
      callback) as Promise<Models.VpnLinkConnectionsListByVpnConnectionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByVpnConnectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/vpnConnections/{connectionName}/vpnLinkConnections",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSiteLinkConnectionsResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByVpnConnectionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSiteLinkConnectionsResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
