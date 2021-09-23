/**
 * Registry of Open Community Challenges API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.5.0
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ChallengeReadmeAllOf } from './challengeReadmeAllOf';
import { ChallengeReadmeCreateResponse } from './challengeReadmeCreateResponse';
import { ChallengeReadmeCreateRequest } from './challengeReadmeCreateRequest';


/**
 * A challenge README
 */
export interface ChallengeReadme { 
    /**
     * The unique identifier of a challenge README
     */
    id: string;
    text: string;
    createdAt: string;
    updatedAt: string;
}

