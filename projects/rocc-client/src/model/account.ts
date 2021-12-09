/**
 * Registry of Open Community Challenges API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.6.0
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * A user or organization account
 */
export interface Account { 
    /**
     * The unique identifier of an account
     */
    id: string;
    /**
     * The user or organization account name
     */
    login: string;
    type: Account.TypeEnum;
}
export namespace Account {
    export type TypeEnum = 'User' | 'Organization';
    export const TypeEnum = {
        User: 'User' as TypeEnum,
        Organization: 'Organization' as TypeEnum
    };
}


