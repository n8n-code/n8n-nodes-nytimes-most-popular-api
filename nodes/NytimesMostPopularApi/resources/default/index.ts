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
					"name": "GET Mostemailed Section Time Period Json",
					"value": "GET Mostemailed Section Time Period Json",
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
					"name": "GET Mostshared Section Time Period Json",
					"value": "GET Mostshared Section Time Period Json",
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
					"name": "GET Mostviewed Section Time Period Json",
					"value": "GET Mostviewed Section Time Period Json",
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
						"GET Mostemailed Section Time Period Json"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
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
						"GET Mostemailed Section Time Period Json"
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
						"GET Mostshared Section Time Period Json"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
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
						"GET Mostshared Section Time Period Json"
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
						"GET Mostviewed Section Time Period Json"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
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
						"GET Mostviewed Section Time Period Json"
					]
				}
			}
		},
];
