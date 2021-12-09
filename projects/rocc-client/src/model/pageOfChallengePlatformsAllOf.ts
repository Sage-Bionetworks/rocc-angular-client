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
import { ChallengePlatform } from './challengePlatform';


export interface PageOfChallengePlatformsAllOf { 
    /**
     * An array of ChallengePlatforms
     */
    challengePlatforms: Array<ChallengePlatform>;
}

