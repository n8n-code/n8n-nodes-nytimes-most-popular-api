import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET Mostemailed Section Time Period JSON",
					"value": "GET Mostemailed Section Time Period JSON",
					"action": "Most Emailed by Section & Time Period",
					"description": "Most Emailed by Section & Time Period",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mostemailed/{{$parameter[\"section\"]}}/{{$parameter[\"time-period\"]}}.json"
						}
					}
				},
				{
					"name": "GET Mostshared Section Time Period JSON",
					"value": "GET Mostshared Section Time Period JSON",
					"action": "Most Shared by Section & Time Period",
					"description": "Most Shared by Section & Time Period",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mostshared/{{$parameter[\"section\"]}}/{{$parameter[\"time-period\"]}}.json"
						}
					}
				},
				{
					"name": "GET Mostviewed Section Time Period JSON",
					"value": "GET Mostviewed Section Time Period JSON",
					"action": "Most Viewed by Section & Time Period",
					"description": "Most Viewed by Section & Time Period",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mostviewed/{{$parameter[\"section\"]}}/{{$parameter[\"time-period\"]}}.json"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /mostemailed/{section}/{time-period}.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Mostemailed Section Time Period JSON"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api-key (query: api-key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Mostemailed Section Time Period JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /mostshared/{section}/{time-period}.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Mostshared Section Time Period JSON"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api-key (query: api-key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Mostshared Section Time Period JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /mostviewed/{section}/{time-period}.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Mostviewed Section Time Period JSON"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api-key (query: api-key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Mostviewed Section Time Period JSON"
					]
				}
			}
		},
];
