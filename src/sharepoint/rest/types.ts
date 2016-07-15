// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx

/**
 * Represents the unique sequential location of a change within the change log.
 */
export interface ChangeToken {
    /**
     * Gets or sets a string value that contains the serialized representation of the change token generated by the protocol server.
     */
    StringValue: string;
}

/**
 * Defines a query that is performed against the change log.
 */
export interface ChangeQuery {
    /**
     * Gets or sets a value that specifies whether add changes are included in the query.
     */
    Add?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to alerts are included in the query.
     */
    Alert?: boolean;

    /**
     * Gets or sets a value that specifies the end date and end time for changes that are returned through the query.
     */
    ChangeTokenEnd?: ChangeToken;

    /**
     * Gets or sets a value that specifies the start date and start time for changes that are returned through the query.
     */
    ChangeTokenStart?: ChangeToken;

    /**
     * Gets or sets a value that specifies whether changes to content types are included in the query.
     */
    ContentType?: boolean;

    /**
     * Gets or sets a value that specifies whether deleted objects are included in the query.
     */
    DeleteObject?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to fields are included in the query.
     */
    Field?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to files are included in the query.
     */
    File?: boolean;

    /**
     * Gets or sets value that specifies whether changes to folders are included in the query.
     */
    Folder?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to groups are included in the query.
     */
    Group?: boolean;

    /**
     * Gets or sets a value that specifies whether adding users to groups is included in the query.
     */
    GroupMembershipAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether deleting users from the groups is included in the query.
     */
    GroupMembershipDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether general changes to list items are included in the query.
     */
    Item?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to lists are included in the query.
     */
    List?: boolean;

    /**
     * Gets or sets a value that specifies whether move changes are included in the query.
     */
    Move?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to the navigation structure of a site collection are included in the query.
     */
    Navigation?: boolean;

    /**
     * Gets or sets a value that specifies whether renaming changes are included in the query.
     */
    Rename?: boolean;

    /**
     * Gets or sets a value that specifies whether restoring items from the recycle bin or from backups is included in the query.
     */
    Restore?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleAssignmentAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleAssignmentDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionUpdate?: boolean;

    /**
     * Gets or sets a value that specifies whether modifications to security policies are included in the query.
     */
    SecurityPolicy?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to site collections are included in the query.
     */
    Site?: boolean;

    /**
     * Gets or sets a value that specifies whether updates made using the item SystemUpdate method are included in the query.
     */
    SystemUpdate?: boolean;

    /**
     * Gets or sets a value that specifies whether update changes are included in the query.
     */
    Update?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to users are included in the query.
     */
    User?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to views are included in the query.
     */
    View?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to Web sites are included in the query.
     */
    Web?: boolean;
}

/**
 * Specifies a Collaborative Application Markup Language (CAML) query on a list or joined lists.
 */
export interface CamlQuery {

    /**
     * Gets or sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format.
     */
    DatesInUtc?: boolean;

    /**
     * Gets or sets a value that specifies the server relative URL of a list folder from which results will be returned.
     */
    FolderServerRelativeUrl?: string;

    /**
     * Gets or sets a value that specifies the information required to get the next page of data for the list view.
     */
    ListItemCollectionPosition?: ListItemCollectionPosition;

    /**
     * Gets or sets value that specifies the XML schema that defines the list view.
     */
    ViewXml?: string;
}

/**
 * Specifies the information required to get the next page of data for a list view.
 */
export interface ListItemCollectionPosition {
    /**
     * Gets or sets a value that specifies information, as name-value pairs, required to get the next page of data for a list view.
     */
    PagingInfo: string;
}

/**
 * Represents the input parameter of the GetListItemChangesSinceToken method.
 */
export interface ChangeLogitemQuery {
    /**
     * The change token for the request.
     */
    ChangeToken?: string;

    /**
     * The XML element that defines custom filtering for the query.
     */
    Contains?: string;

    /**
     * The records from the list to return and their return order.
     */
    Query?: string;

    /**
     * The options for modifying the query.
     */
    QueryOptions?: string;

    /**
     * RowLimit
     */
    RowLimit?: string;

    /**
     * The names of the fields to include in the query result.
     */
    ViewFields?: string;

    /**
     * The GUID of the view.
     */
    ViewName?: string;
}

/**
 * Determines the display mode of the given control or view
 */
export enum ControlMode {
    Display = 1,
    Edit = 2,
    New = 3
}

/**
 * Represents properties of a list item field and its value.
 */
export interface ListItemFormUpdateValue {

    /**
     * The error message result after validating the value for the field.
     */
    ErrorMessage?: string;

    /**
     * The internal name of the field.
     */
    FieldName?: string;

    /**
     * The value of the field, in string format.
     */
    FieldValue?: string;

    /**
     * Indicates whether there was an error result after validating the value for the field.
     */
    HasException?: boolean;
}

/**
 * Specifies the type of the field.
 */
export enum FieldTypes {
    Invalid = 0,
    Integer = 1,
    Text = 2,
    Note = 3,
    DateTime = 4,
    Counter = 5,
    Choice = 6,
    Lookup = 7,
    Boolean = 8,
    Number = 9,
    Currency = 10,
    URL = 11,
    Computed = 12,
    Threading = 13,
    Guid = 14,
    MultiChoice = 15,
    GridChoice = 16,
    Calculated = 17,
    File = 18,
    Attachments = 19,
    User = 20,
    Recurrence = 21,
    CrossProjectLink = 22,
    ModStat = 23,
    Error = 24,
    ContentTypeId = 25,
    PageSeparator = 26,
    ThreadIndex = 27,
    WorkflowStatus = 28,
    AllDayEvent = 29,
    WorkflowEventType = 30
}

export enum DateTimeFieldFormatType {
    DateOnly = 0,
    DateTime = 1
}

/**
 * Specifies the control settings while adding a field.
 */
export enum AddFieldOptions {
    /**
     *  Specify that a new field added to the list must also be added to the default content type in the site collection
     */
    DefaultValue = 0,
    /**
     * Specify that a new field added to the list must also be added to the default content type in the site collection.
     */
    AddToDefaultContentType = 1,
    /**
     * Specify that a new field must not be added to any other content type
     */
    AddToNoContentType = 2,
    /**
     *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
     */
    AddToAllContentTypes = 4,
    /**
     * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
     */
    AddFieldInternalNameHint = 8,
    /**
     * Specify that a new field that is added to the specified list must also be added to the default list view
     */
    AddFieldToDefaultView = 16,
    /**
     * Specify to confirm that no other field has the same display name
     */
    AddFieldCheckDisplayName = 32
}

export interface XmlSchemaFieldCreationInformation {
    Options?: AddFieldOptions;
    SchemaXml: string;
}

export enum CalendarType {
    Gregorian = 1,
    Japan = 3,
    Taiwan = 4,
    Korea = 5,
    Hijri = 6,
    Thai = 7,
    Hebrew = 8,
    GregorianMEFrench = 9,
    GregorianArabic = 10,
    GregorianXLITEnglish = 11,
    GregorianXLITFrench = 12,
    KoreaJapanLunar = 14,
    ChineseLunar = 15,
    SakaEra = 16,
    UmAlQura = 23
}

export enum UrlFieldFormatType {
    Hyperlink = 0,
    Image = 1
}

export interface BasePermissions {
    Low: string;
    High: string;
}

export interface FollowedContent {
    FollowedDocumentsUrl: string;
    FollowedSitesUrl: string;
}

export interface UserProfile {
    /**
     * An object containing the user's FollowedDocumentsUrl and FollowedSitesUrl.
     */
    FollowedContent?: FollowedContent;
    /**
     * The account name of the user. (SharePoint Online only)
     */
    AccountName?: string;
    /**
     * The display name of the user. (SharePoint Online only)
     */
    DisplayName?: string;
    /**
     * The FirstRun flag of the user. (SharePoint Online only)
     */
    O15FirstRunExperience?: number;
    /**
     * The personal site of the user.
     */
    PersonalSite?: string;
    /**
     * The capabilities of the user's personal site. Represents a bitwise PersonalSiteCapabilities value:
     * None = 0; Profile Value = 1; Social Value = 2; Storage Value = 4; MyTasksDashboard Value = 8; Education Value = 16; Guest Value = 32.
     */
    PersonalSiteCapabilities?: number;
    /**
     * The error thrown when the user's personal site was first created, if any. (SharePoint Online only)
     */
    PersonalSiteFirstCreationError?: string;
    /**
     * The date and time when the user's personal site was first created. (SharePoint Online only)
     */
    PersonalSiteFirstCreationTime?: Date;
    /**
     * The status for the state of the personal site instantiation
     */
    PersonalSiteInstantiationState?: number;
    /**
     * The date and time when the user's personal site was last created. (SharePoint Online only)
     */
    PersonalSiteLastCreationTime?: Date;
    /**
     * The number of attempts made to create the user's personal site. (SharePoint Online only)
     */
    PersonalSiteNumberOfRetries?: number;
    /**
     * Indicates whether the user's picture is imported from Exchange.
     */
    PictureImportEnabled?: boolean;
    /**
     * The public URL of the personal site of the current user. (SharePoint Online only)
     */
    PublicUrl?: string;
    /**
     * The URL used to create the user's personal site.
     */
    UrlToCreatePersonalSite?: string;
}

export interface HashTag {
    /**
     * The hash tag's internal name.
     */
    Name?: string;
    /**
     * The number of times that the hash tag is used.
     */
    UseCount?: number;
}

export interface HashTagCollection {
    Items: HashTag[];
}

export interface UserIdInfo {
    NameId?: string;
    NameIdIssuer?: string;
}

export enum PrincipalType {
    None = 0,
    User = 1,
    DistributionList = 2,
    SecurityGroup = 4,
    SharePointGroup = 8,
    All = 15
}

export interface DocumentLibraryInformation {
    AbsoluteUrl?: string;
    Modified?: Date;
    ModifiedFriendlyDisplay?: string;
    ServerRelativeUrl?: string;
    Title?: string;
}

export interface ContextInfo {
    FormDigestTimeoutSeconds?: number;
    FormDigestValue?: number;
    LibraryVersion?: string;
    SiteFullUrl?: string;
    SupportedSchemaVersions?: string[];
    WebFullUrl?: string;
}
