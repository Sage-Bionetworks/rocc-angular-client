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


/**
 * The submission type of the challenge
 */
export type ChallengeSubmissionType = 'DockerImage' | 'PredictionFile' | 'Other';

export const ChallengeSubmissionType = {
    DockerImage: 'DockerImage' as ChallengeSubmissionType,
    PredictionFile: 'PredictionFile' as ChallengeSubmissionType,
    Other: 'Other' as ChallengeSubmissionType
};

