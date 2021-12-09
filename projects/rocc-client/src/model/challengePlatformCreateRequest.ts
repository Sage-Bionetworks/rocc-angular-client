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
 * The information used to create a challenge platform
 */
export interface ChallengePlatformCreateRequest { 
    /**
     * The name of the challenge platform
     */
    name: string;
    displayName: string;
    websiteUrl: string;
    avatarUrl: string;
}

