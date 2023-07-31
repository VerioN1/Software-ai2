BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Role_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Role_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] NVARCHAR(1000) NOT NULL,
    [firstName] NVARCHAR(50) NOT NULL,
    [lastName] NVARCHAR(50) NOT NULL,
    [username] NVARCHAR(50) NOT NULL,
    [password] NVARCHAR(20) NOT NULL,
    [email] VARCHAR(100) NOT NULL,
    [emailConfirmed] BIT NOT NULL CONSTRAINT [User_emailConfirmed_df] DEFAULT 0,
    [tokenEmail] VARCHAR(32),
    [remark] NVARCHAR(100),
    [roleId] INT NOT NULL,
    [rowAmount] INT,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Alerts] (
    [AlertId] INT NOT NULL IDENTITY(1,1),
    [CustomerNumber] NVARCHAR(20),
    [AlertName] NVARCHAR(50),
    [AlertMessage] NVARCHAR(1024),
    [Sender] NVARCHAR(1024),
    [ParamID1] INT,
    [ParamID2] INT,
    [ParamID3] INT,
    [Email1] NVARCHAR(1024),
    [Email2] NVARCHAR(1024),
    [Email3] NVARCHAR(1024),
    [Email4] NVARCHAR(1024),
    [Email5] NVARCHAR(1024),
    [SMS1] NVARCHAR(1024),
    [SMS2] NVARCHAR(1024),
    [SMS3] NVARCHAR(1024),
    [SMS4] NVARCHAR(1024),
    [SMS5] NVARCHAR(1024),
    [ParamID4] INT,
    [AlertLabel] NVARCHAR(1024),
    [ShowAlert] BIT,
    [ShowDate] BIT,
    [DateLabel] NVARCHAR(1024),
    [ThermoTraceLabel] NVARCHAR(1024),
    [ShowThermoTrace] BIT,
    [DeliveryNoteLabel] NVARCHAR(1024),
    [ShowDeliveryNote] BIT,
    [ReaderLabel] NVARCHAR(1024),
    [ShowReader] BIT,
    [SiteLabel] NVARCHAR(1024),
    [ShowSite] BIT,
    [BarcodeIDLabel] NVARCHAR(1024),
    [ShowBarcodeID] BIT,
    CONSTRAINT [PK_Alerts] PRIMARY KEY CLUSTERED ([AlertId]),
    CONSTRAINT [IX_Alerts_CustomerNumber_AlertName] UNIQUE NONCLUSTERED ([CustomerNumber],[AlertName])
);

-- CreateTable
CREATE TABLE [dbo].[AlertsParameter] (
    [Id] INT NOT NULL,
    [Value] NVARCHAR(30),
    CONSTRAINT [PK_AlertsParameter] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Boxes] (
    [BoxNumber] NVARCHAR(20) NOT NULL,
    [FirstLabelNo] NVARCHAR(20),
    [LastLabelNo] NVARCHAR(20),
    [NoOfLabels] INT,
    [LabelType] NVARCHAR(50),
    [Remarks] NVARCHAR(50),
    [CustomerNumber] NVARCHAR(20),
    [ProfileID] INT,
    [UserCreatedID] INT,
    [DateTimeCreated] DATETIME,
    [AssignCustByUserID] INT,
    [AssignCustDateTime] DATETIME,
    [IndexID] INT NOT NULL IDENTITY(1,1),
    [OperatorName] NVARCHAR(50),
    CONSTRAINT [PK_Boxes] PRIMARY KEY CLUSTERED ([BoxNumber])
);

-- CreateTable
CREATE TABLE [dbo].[BoxesInCartons] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [CartonNumber] NVARCHAR(50),
    [BoxNumber] NVARCHAR(20)
);

-- CreateTable
CREATE TABLE [dbo].[Cartons] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [CartonNumber] NVARCHAR(50) NOT NULL,
    [BoxesAmount] INT,
    [CustomerNumber] NVARCHAR(20),
    [Remarks] NVARCHAR(1024),
    [DateTimeCreated] DATETIME,
    [OrderNumber] NVARCHAR(50),
    [UserCreatedID] INT,
    CONSTRAINT [PK_Cartons] PRIMARY KEY CLUSTERED ([CartonNumber])
);

-- CreateTable
CREATE TABLE [dbo].[Customer] (
    [CustomerNumber] NVARCHAR(20) NOT NULL,
    [CustomerName] NVARCHAR(50),
    [GMTID] NVARCHAR(200),
    [GmtDesc] NVARCHAR(400),
    [IndexID] INT NOT NULL IDENTITY(1,1),
    [CreatedDate] DATETIME,
    CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED ([CustomerNumber]),
    CONSTRAINT [IX_Customer] UNIQUE NONCLUSTERED ([CustomerNumber])
);

-- CreateTable
CREATE TABLE [dbo].[CustomerReader] (
    [CustomerNumber] NVARCHAR(20) NOT NULL,
    [ReaderID] INT NOT NULL,
    CONSTRAINT [PK_CustomerReader] PRIMARY KEY CLUSTERED ([CustomerNumber],[ReaderID])
);

-- CreateTable
CREATE TABLE [dbo].[InterfaceLanguages] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [LanguageDef] NVARCHAR(50),
    [Language] NVARCHAR(50),
    [LangCode] NVARCHAR(20),
    CONSTRAINT [PK_InterfaceLanguages] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Labels] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [LabelID] NVARCHAR(50) NOT NULL,
    [BoxNumber] NVARCHAR(20),
    [ModelNumber] NVARCHAR(50),
    [VersionNumber] NVARCHAR(20),
    [LabelTemp] NVARCHAR(20),
    [CreatedDate] DATETIME,
    [MachineNumber] NVARCHAR(50),
    [OrderNumber] NVARCHAR(50),
    [InkVolume] NVARCHAR(20),
    [InkBatchNumber] NVARCHAR(50),
    [PillowID] NVARCHAR(50),
    [ConductorID] NVARCHAR(50),
    [OperatorName] NVARCHAR(50),
    [DateTimeInserted] DATETIME,
    CONSTRAINT [PK_Labels] PRIMARY KEY CLUSTERED ([LabelID])
);

-- CreateTable
CREATE TABLE [dbo].[MasterSonRecorders] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [LabelID] NVARCHAR(20) NOT NULL,
    [IsMaster] BIT,
    [IsSon] BIT,
    [MasterID] NVARCHAR(20),
    [UserCreatedID] INT,
    [DateTimeCreated] DATETIME,
    [Del] BIT,
    CONSTRAINT [PK_MasterSonRecorders] PRIMARY KEY CLUSTERED ([LabelID])
);

-- CreateTable
CREATE TABLE [dbo].[Order_Delivery] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [OrderID] INT NOT NULL,
    [ShippedBy] NVARCHAR(100),
    [ShippedDate] DATETIME,
    [TrackingNumber] NVARCHAR(100),
    [LinkTrackingNumber] NVARCHAR(500),
    [ShippingMethod] NVARCHAR(200),
    CONSTRAINT [PK_Table_1] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Order_Production] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [OrderID] INT NOT NULL,
    [AssignToName] NVARCHAR(100),
    [RawMaterialInStock] BIT,
    [RawMaterialDetails] NVARCHAR(500),
    [PrintInStock] BIT,
    [PrintDetails] NVARCHAR(500),
    [StartProductionDate] DATETIME,
    [EndProductionDate] DATETIME,
    [PassedQAName] NVARCHAR(100),
    [PassedQADate] DATETIME,
    [BoxNumber] NVARCHAR(100),
    [CartonNumber] NVARCHAR(100),
    [ProductionComments] NVARCHAR(500),
    [ApprovedBy] NVARCHAR(100),
    CONSTRAINT [PK_Order_Production] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Order_Statuses] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [StatusID] INT,
    [StatusName] NVARCHAR(20),
    [SubStatus] NVARCHAR(50),
    CONSTRAINT [PK_Order_Statuses] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Orders_Shipping] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [OrderByID] INT,
    [ProductID] NVARCHAR(50),
    [Quantity] INT,
    [CustomerID] NVARCHAR(20),
    [ProfileID] INT,
    [Date] DATETIME,
    [OrderComments] NVARCHAR(500),
    [ShippingInfoName] NVARCHAR(100),
    [Address1] NVARCHAR(200),
    [Address2] NVARCHAR(200),
    [City] NVARCHAR(100),
    [State] NVARCHAR(100),
    [Country] NVARCHAR(200),
    [Postal] NVARCHAR(50),
    [Phone1] NVARCHAR(200),
    [Phone2] NVARCHAR(200),
    [InvoiceAmount] INT,
    [OrderStatus] INT,
    [CreatedDate] DATETIME,
    [Email] NVARCHAR(1024),
    CONSTRAINT [PK_Orders_Shipping] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[OrdersStaff] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(100),
    [Email] NVARCHAR(1024),
    CONSTRAINT [PK_OrdersStaff] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[ProductsInfo] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [TermoTraceProduct] NVARCHAR(50) NOT NULL,
    [ProductDescription] NVARCHAR(30),
    [BaseTemp] INT,
    [ClalibrationTemp] INT,
    [TimeToQuality1] INT,
    [TimeToQuality2] INT,
    [TimeToQuality3] INT,
    [TimeToQuality4] INT,
    [TimeToQuality5] INT,
    [TimeToQuality6] INT,
    [img] IMAGE,
    [StockCover] INT,
    [RawMaterials] INT,
    [DocumentName] NVARCHAR(250),
    CONSTRAINT [PK_Productsinfo] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Profile] (
    [ProfileID] INT NOT NULL IDENTITY(1,1),
    [CustomerNumber] NVARCHAR(500),
    [ProfileName] NVARCHAR(500),
    [CommodityName] NVARCHAR(1024),
    [ProductsInfoID] NVARCHAR(50),
    [AutomaticApproval] BIT,
    [NotApprovedMsg] NVARCHAR(1024),
    CONSTRAINT [PK_Profile] PRIMARY KEY CLUSTERED ([ProfileID])
);

-- CreateTable
CREATE TABLE [dbo].[QualityCode] (
    [ProfileID] INT NOT NULL,
    [QualityCodeNo] INT NOT NULL,
    [QualityCodeMessage] NVARCHAR(100),
    [QualityCodeColor] NVARCHAR(50),
    [QualityCodeBackColor] NVARCHAR(50),
    [IsAcknowledge] BIT,
    [AckMessage] NVARCHAR(100),
    [IsAlert] BIT,
    [AlertID] INT,
    [URL] NVARCHAR(1024),
    [UrlAutoLaunch] BIT,
    [IsEmail] BIT,
    [Days] INT,
    [FeedbackRequest] BIT,
    [FeedbackMsg] NVARCHAR(1024),
    [ShowPhone] BIT,
    [PhoneNumber] NVARCHAR(50),
    CONSTRAINT [PK_QualityCode] PRIMARY KEY CLUSTERED ([QualityCodeNo],[ProfileID])
);

-- CreateTable
CREATE TABLE [dbo].[Reader] (
    [ReaderID] INT NOT NULL IDENTITY(1,1),
    [PhoneNumber] NVARCHAR(50) NOT NULL,
    [Name] NVARCHAR(50),
    [Company] NVARCHAR(50),
    [Address] NVARCHAR(50),
    [Country] NVARCHAR(50),
    [State] NVARCHAR(50),
    [Zip] NVARCHAR(50),
    [Email] NVARCHAR(50),
    [LastCommunication] DATETIME,
    [SWVersion] NVARCHAR(50),
    [ReaderType] NVARCHAR(50),
    [Del] BIT,
    [LangCode] NVARCHAR(50),
    [ThemeID] INT,
    [VersionNum] INT,
    CONSTRAINT [PK_Reader] PRIMARY KEY CLUSTERED ([ReaderID])
);

-- CreateTable
CREATE TABLE [dbo].[ReadersSite] (
    [ReaderID] INT NOT NULL,
    [SiteID] INT NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[RulePermissions] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [PermissionID] INT,
    [RuleID] INT,
    [Modify] BIT,
    [View] BIT,
    CONSTRAINT [PK_RulePermissions] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Rule] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(1024),
    [Description] NVARCHAR(1024),
    [Del] BIT,
    CONSTRAINT [PK_Rules] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Scan] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [ScanDate] DATETIME,
    [ReaderID] INT,
    [Barcode] NVARCHAR(50),
    [DeliveryNote] NVARCHAR(50),
    [CustomerNumber] NVARCHAR(20),
    [ProfileID] INT,
    [QualityCodeNo] INT,
    [Upc] NVARCHAR(50),
    [ReadingLocation] NVARCHAR(100),
    [Img] IMAGE,
    [Img2] IMAGE,
    [Img3] IMAGE,
    [IsUnique] BIT,
    [Latitude] FLOAT(53),
    [Longitude] FLOAT(53),
    [Del] BIT,
    [ScanRespones] NVARCHAR(1024),
    [LangCode] NVARCHAR(50),
    [SiteID] INT,
    [AutoScannedSon] BIT,
    [Feedback] NVARCHAR(1024),
    [InheritedDeliveryNote] NVARCHAR(50),
    [InheritedUpc] NVARCHAR(50),
    CONSTRAINT [PK_Scans] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Site] (
    [siteId] INT NOT NULL IDENTITY(1,1),
    [siteName] NVARCHAR(50) NOT NULL,
    [address] NVARCHAR(100),
    [latitude] DECIMAL(12,8),
    [longitude] DECIMAL(12,8),
    [tolerance] DECIMAL(4,0),
    CONSTRAINT [PK_Sites] PRIMARY KEY CLUSTERED ([siteId])
);

-- CreateTable
CREATE TABLE [dbo].[SitesCostumer] (
    [SiteID] INT NOT NULL,
    [CustomerNumber] NVARCHAR(20) NOT NULL,
    [CustomerID] INT
);

-- CreateTable
CREATE TABLE [dbo].[UserCustomer] (
    [userId] INT NOT NULL,
    [customerId] NVARCHAR(20) NOT NULL,
    CONSTRAINT [PK_UserCustomer] PRIMARY KEY CLUSTERED ([userId],[customerId])
);

-- CreateTable
CREATE TABLE [dbo].[UserSite] (
    [userId] INT NOT NULL,
    [siteId] INT NOT NULL,
    CONSTRAINT [PK_UserSite] PRIMARY KEY CLUSTERED ([userId],[siteId])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_QualityCode] ON [dbo].[QualityCode]([ProfileID]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_QualityCode_1] ON [dbo].[QualityCode]([QualityCodeNo]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_Reader_PhoneNumbe] ON [dbo].[Reader]([PhoneNumber]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_ReadersSite] ON [dbo].[ReadersSite]([SiteID]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_Scans] ON [dbo].[Scan]([Barcode]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_Scans_1] ON [dbo].[Scan]([DeliveryNote]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_Scans_3] ON [dbo].[Scan]([ScanDate]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_SitesCostumer] ON [dbo].[SitesCostumer]([SiteID]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_SitesCostumer_1] ON [dbo].[SitesCostumer]([CustomerID]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_UserCustomer] ON [dbo].[UserCustomer]([userId]);

-- AddForeignKey
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_roleId_fkey] FOREIGN KEY ([roleId]) REFERENCES [dbo].[Role]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
