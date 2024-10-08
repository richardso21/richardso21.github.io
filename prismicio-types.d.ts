// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

interface AboutDocumentData {}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, 'about', Lang>;

/**
 * Content for Experience Bullet documents
 */
interface ExperienceBulletDocumentData {
  /**
   * Org Name field in *Experience Bullet*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience-bullet.orgName
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  orgName: prismic.KeyTextField;

  /**
   * Role field in *Experience Bullet*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience-bullet.role
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  role: prismic.KeyTextField;

  /**
   * Start field in *Experience Bullet*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: experience-bullet.start
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  start: prismic.DateField;

  /**
   * End field in *Experience Bullet*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: experience-bullet.end
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  end: prismic.DateField;

  /**
   * Org Logo field in *Experience Bullet*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: experience-bullet.orgLogo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  orgLogo: prismic.ImageField<never>;

  /**
   * Details field in *Experience Bullet*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience-bullet.details
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  details: prismic.RichTextField;
}

/**
 * Experience Bullet document from Prismic
 *
 * - **API ID**: `experience-bullet`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExperienceBulletDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ExperienceBulletDocumentData>,
    'experience-bullet',
    Lang
  >;

/**
 * Content for pdf documents
 */
interface PdfDocumentData {
  /**
   * Pdf Link field in *pdf*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: pdf.pdfLink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  pdfLink: prismic.LinkToMediaField;
}

/**
 * pdf document from Prismic
 *
 * - **API ID**: `pdf`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PdfDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PdfDocumentData>, 'pdf', Lang>;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Front Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.frontImage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  frontImage: prismic.ImageField<never>;

  /**
   * Name field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Tech Stack field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.techStack
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  techStack: prismic.KeyTextField;

  /**
   * Details field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.details
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  details: prismic.RichTextField;

  /**
   * Date Done field in *Project*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: project.dateDone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  dateDone: prismic.DateField;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    'project',
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | ExperienceBulletDocument
  | PdfDocument
  | ProjectDocument;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      ExperienceBulletDocument,
      ExperienceBulletDocumentData,
      PdfDocument,
      PdfDocumentData,
      ProjectDocument,
      ProjectDocumentData,
      AllDocumentTypes,
    };
  }
}
