// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type BlogPost = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'BlogPost'
  /** The title of the blog post */
  title: string
  /** The date of the blog post */
  date: string
  /** The modified time of the blog post */
  modifiedTime: string
  /** The summary of the blog post */
  summary: string
  /** Image for the blog post */
  image: string
  /** MDX file body */
  body: MDX
  slug: string
}

export type Pages = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Pages'
  /** MDX file body */
  body: MDX
  slug: string
}

export type Project = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Project'
  /** The name of the project */
  name: string
  /** The description of the project */
  description: string
  /** The link to the project's homepage */
  homepage?: string | undefined
  /** The link to the project's github page */
  githubLink: string
  /** The name of the icon to use */
  iconName: string
  /** Image for the project */
  image: string
  /** The name of the repo of the project */
  repoName: string
  badges?: Badge[] | undefined
  /** MDX file body */
  body: MDX
  slug: string
}  

/** Nested types */
export type Badge = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Badge'
  /** The name of the icon to use */
  icon: string
  /** The label of the badge */
  label: string

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = BlogPost | Pages | Project
export type DocumentTypeNames = 'BlogPost' | 'Pages' | 'Project'

export type NestedTypes = Badge
export type NestedTypeNames = 'Badge'


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  BlogPost: BlogPost
  Pages: Pages
  Project: Project
}

export type NestedTypeMap = {
  Badge: Badge
}

 