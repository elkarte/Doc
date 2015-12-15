
var ApiGen = ApiGen || {};
ApiGen.elements = [["f","accessibleBoards()"],["f","accessibleGroups()"],["c","Action"],["c","Action_Controller"],["f","add_integration_function()"],["f","addChildBoards()"],["f","addData()"],["f","addInlineJavascript()"],["f","addJavascriptVar()"],["f","addKarma()"],["f","AddMailQueue()"],["f","addMembergroup()"],["f","addMembersToGroup()"],["f","addMentions()"],["f","addMessageIcon()"],["f","addModeratorNote()"],["f","addonsCredits()"],["c","AddonSettings_Controller"],["f","addPackageLog()"],["f","addPackageServer()"],["f","addPMRule()"],["f","addPollOptions()"],["f","addProfileField()"],["f","addReportComment()"],["f","addSeparator()"],["f","addSmiley()"],["f","addSubscription()"],["f","addTheme()"],["f","addThemeOptions()"],["f","addTriggers()"],["f","addVote()"],["c","Admin_Controller"],["c","AdminDebug_Controller"],["f","adminInfoFile()"],["c","AdminLog_Controller"],["f","adminLogin()"],["f","adminLogin_outputPostVars()"],["f","admins()"],["f","allBoardModerators()"],["f","allMembergroups()"],["f","allMembergroupsBoardAccess()"],["f","allowedTo()"],["f","alreadySubscribed()"],["f","alterFullTextIndex()"],["c","Announce_Controller"],["f","applyRules()"],["f","approveAllUnapproved()"],["f","approveAttachments()"],["f","approved_attach_sort()"],["f","approveMembers()"],["f","approveMessages()"],["f","approvePosts()"],["f","approveTopics()"],["f","assignGroupModerators()"],["f","assignGroupsToMember()"],["f","assignGroupToBoards()"],["f","assignPermissionProfileToBoard()"],["f","associatedPoll()"],["f","associatedTopic()"],["f","attachDirProperties()"],["f","attachDirStatus()"],["c","Attachment_Controller"],["c","Attachment_Error_Context"],["f","attachment_filesize()"],["f","attachment_folder()"],["f","attachmentBelongsTo()"],["f","attachmentChecks()"],["f","attachmentPaths()"],["f","attachments_init_dir()"],["f","attachmentsOfMessage()"],["f","attachmentsSizeForMessage()"],["f","attachmentUploadChecks()"],["c","Auth_Controller"],["c","Authorize_Display"],["c","Authorize_Payment"],["f","automanage_attachments_by_space()"],["f","automanage_attachments_check_directory()"],["f","automanage_attachments_create_directory()"],["f","autoRotateImage()"],["f","availableThemes()"],["c","BadBehavior_Controller"],["f","BanCheckUser()"],["f","banDetails()"],["f","banLoadAdditionalIPs()"],["f","banLoadAdditionalIPsError()"],["f","banLoadAdditionalIPsMember()"],["f","banLogItems()"],["f","banPermissions()"],["f","basicMessageInfo()"],["f","basicWatchedUsers()"],["f","binary_to_long()"],["f","binary_xor()"],["c","BoardIndex_Controller"],["f","boardInfo()"],["f","boardNotifications()"],["f","boardPermissions()"],["f","boardPermissionsByGroup()"],["c","Boards_List"],["f","boardsAllowedTo()"],["f","boardsModerated()"],["f","boardsPosts()"],["c","Browser_Detector"],["f","buffer_callback()"],["f","cache_get_data()"],["f","cache_get_key()"],["f","cache_getLastPosts()"],["f","cache_getMembergroupList()"],["f","cache_getOffsetIndependentEvents()"],["f","cache_getRecentEvents()"],["f","cache_put_data()"],["f","cache_quick_get()"],["f","calculateNextTrigger()"],["c","Calendar_Controller"],["f","call_integration_buffer()"],["f","call_integration_hook()"],["f","call_integration_include_hook()"],["f","callMenu()"],["f","canAccessMessage()"],["f","canContact()"],["f","canLinkEvent()"],["f","categoryName()"],["f","cdata_parse()"],["f","censorText()"],["f","changeMentionStatus()"],["f","changePMLabels()"],["f","checkActivation()"],["f","checkConfirm()"],["f","checkExistingTriggerIP()"],["f","checkGD()"],["f","checkImageContents()"],["f","checkImagick()"],["f","checkMessagePermissions()"],["f","checkPackageDependency()"],["f","checkPMReceived()"],["f","checkSession()"],["f","checkSubmitOnce()"],["f","checkVote()"],["f","clean_cache()"],["f","cleanLangString()"],["f","cleanRequest()"],["f","cleanTokens()"],["f","cleanXml()"],["f","clearDenyPermissions()"],["f","clearKarma()"],["f","clearLikes()"],["f","clearPostgroupPermissions()"],["f","collapseCategories()"],["f","comma_format()"],["f","compareVersions()"],["f","consolidateSpiderStats()"],["f","construct_query_string()"],["f","constructBanQueryIP()"],["f","constructPageIndex()"],["f","convertIPv6toInts()"],["f","copyBoardPermission()"],["f","copyBoardPermissions()"],["f","copyPermission()"],["f","copyPermissionProfile()"],["f","copyPermissions()"],["f","copytree()"],["c","CoreFeatures_Controller"],["f","count_user_posts()"],["f","count_user_topics()"],["f","countActiveSubscriptions()"],["f","countAttachmentsInFolders()"],["f","countBoardPermissions()"],["f","countBoards()"],["f","countConfiguredGuestOptions()"],["f","countConfiguredMemberOptions()"],["f","countContributors()"],["f","countInactiveMembers()"],["f","countMembersBy()"],["f","countMembersInGroup()"],["f","countMembersOnline()"],["f","countMessages()"],["f","countMessagesBefore()"],["f","countMessagesSince()"],["f","countModeratorNotes()"],["f","countNewPosts()"],["f","countPermissions()"],["f","countSplitMessages()"],["f","countTaskLogEntries()"],["f","countTopicsByBoard()"],["f","countTopicsFromBoard()"],["f","countUserMentions()"],["f","crc32_compat()"],["f","create_button()"],["f","create_chmod_control()"],["f","create_control_richedit()"],["f","create_control_verification()"],["f","create_pm_draft()"],["f","create_post_draft()"],["f","createAttachment()"],["f","createBoard()"],["f","createCategory()"],["f","createList()"],["f","createMenu()"],["f","createPoll()"],["f","createPost()"],["f","createSalvageArea()"],["f","createSearchIndex()"],["f","createSphinxConfig()"],["f","createThumbnail()"],["f","createToken()"],["f","createWaveFile()"],["c","Curl_Fetch_Webdata"],["f","currentAttachDirProperties()"],["f","currentContext()"],["f","currentMemberID()"],["f","custom_profiles_toggle_callback()"],["c","Custom_Search"],["c","Data_Validator"],["c","Database"],["f","database()"],["c","Database_MySQL"],["c","Database_PostgreSQL"],["f","db_extend()"],["f","db_search()"],["f","db_table()"],["c","DbSearch"],["c","DbSearch_MySQL"],["c","DbSearch_PostgreSQL"],["c","DbTable"],["c","DbTable_MySQL"],["c","DbTable_PostgreSQL"],["f","decreaseLikeCounts()"],["f","decreaseVoteCounter()"],["f","decrementBoard()"],["f","deleteAllBoardPermissions()"],["f","deleteBadBehavior()"],["f","deleteBoardPermission()"],["f","deleteBoardPermissions()"],["f","deleteBoards()"],["f","deleteCategories()"],["f","deleteDrafts()"],["f","deleteErrors()"],["f","deleteGroupRequests()"],["f","deleteInvalidPermissions()"],["f","deleteLogAction()"],["f","deleteMailQueueItems()"],["f","deleteMembergroups()"],["f","deleteMembers()"],["f","deleteMessageIcons()"],["f","deleteMessages()"],["f","deleteOldProfileFieldSelects()"],["f","deleteOnline()"],["f","deletePackageServer()"],["f","deletePermission()"],["f","deletePermissionProfiles()"],["f","deletePMRules()"],["f","deletePollOptions()"],["f","deleteProfileField()"],["f","deleteProfileFieldUserData()"],["f","deleteSmileys()"],["f","deleteSubscription()"],["f","deleteTheme()"],["f","deleteVariants()"],["f","deltree()"],["f","destroyMenu()"],["f","detachDeletedGroupFromMembers()"],["f","detachGroupFromBoards()"],["f","detachGroupModerators()"],["f","detectBrowser()"],["f","detectExceedingMessages()"],["f","detectFulltextIndex()"],["f","detectServer()"],["f","detectServerCores()"],["f","detectServerLoad()"],["f","determineActions()"],["f","determineAvatar()"],["f","determineRemovableMessages()"],["f","determineTopicClass()"],["f","determineVote()"],["c","Display_Controller"],["f","display_db_error()"],["f","display_loadavg_error()"],["f","display_maintenance_message()"],["f","displayDebug()"],["f","doLogin()"],["f","doSecurityChecks()"],["c","Draft_Controller"],["f","drafts_toggle_callback()"],["f","draftsCount()"],["f","draftsRecipients()"],["f","drop_log_search_words()"],["f","DumpDatabase2()"],["f","dumpTags()"],["f","earliest_msg()"],["f","editHoliday()"],["f","elk_array_insert()"],["f","elk_db_initiate()"],["f","elk_main()"],["f","elk_seed_generator()"],["f","elk_setcookie()"],["c","Email_Format"],["c","Email_Parse"],["c","Email_Settings"],["f","emailAdmins()"],["c","Emailpost_Controller"],["f","emailsInfo()"],["c","Emailuser_Controller"],["f","emptyTaskLog()"],["f","enable_maillist_imap_cron()"],["f","encode_special()"],["f","enforceReactivation()"],["f","ensureUniqueProfileField()"],["f","entity_fix__callback()"],["f","entityConvert()"],["c","Error_Context"],["f","error_handler()"],["f","eventInfoForTopic()"],["f","excludeBannedMembers()"],["f","expandIPv6()"],["f","fatal_error()"],["f","fatal_lang_error()"],["f","fetch_web_data()"],["f","fetchBoardPermissions()"],["f","fetchBoardsInfo()"],["f","fetchBodyType()"],["f","fetchErrorsByType()"],["f","fetchMessageIconsDetails()"],["f","fetchPackageServers()"],["f","fetchPermissions()"],["f","fetchPerms__recursive()"],["f","filter_accessible_attachment()"],["f","findAttachmentsToMove()"],["f","findForumErrors()"],["f","findMemberMention()"],["f","findMembers()"],["f","findMinMaxUserMessage()"],["f","findMinMaxUserTopic()"],["f","findOrphanAttachments()"],["f","findOrphanAvatars()"],["f","findOrphanThumbnails()"],["f","findParentsOrphanThumbnails()"],["f","findPossiblePackages()"],["f","findSearchAPI()"],["f","findUser()"],["f","finishTables()"],["f","fix_possible_url()"],["f","fix_possible_url_callback()"],["f","fix_serialized_columns()"],["f","fixchar__callback()"],["f","fixChildren()"],["f","fixMergedTopics()"],["f","fixTag()"],["f","fixTags()"],["f","fixTags_img_callback()"],["f","flushLogTables()"],["f","followupTopics()"],["f","footnote_callback()"],["f","formatViewers()"],["f","forum_time()"],["f","frameOptionsHeader()"],["c","Ftp_Connection"],["c","Fulltext_Search"],["f","generateSubscriptionError()"],["f","generateValidationCode()"],["c","Generic_List"],["f","get_directory_tree_elements()"],["f","get_file_listing()"],["f","get_files_recursive()"],["f","get_integration_hooks()"],["f","get_memcached_server()"],["f","get_trash_folder()"],["f","getAllThemes()"],["f","getAttachmentCount()"],["f","getAttachmentDirs()"],["f","getAttachmentFilename()"],["f","getAttachmentFromTopic()"],["f","getAttachmentPath()"],["f","getAttachmentPathID()"],["f","getAttachments()"],["f","getAvatar()"],["f","getAvatarCount()"],["f","getAvatarPath()"],["f","getAvatarPathID()"],["f","getAvatarsDefault()"],["f","getAverages()"],["f","getBadBehaviorLogEntries()"],["f","getBadBehaviorLogEntryCount()"],["f","getBasicMemberData()"],["f","getBasicMembergroupData()"],["f","getBasicThemeInfos()"],["f","getBirthdayRange()"],["f","getBoardList()"],["f","getBoardModerators()"],["f","getBoardNotificationsCount()"],["f","getBoardParents()"],["f","getBoardProperties()"],["f","getBoardTree()"],["f","getCalendarGrid()"],["f","getCalendarWeek()"],["f","getConcernedMembers()"],["f","getCustomThemes()"],["f","getDailyStats()"],["f","getDiscussions()"],["f","getElkTables()"],["f","getErrorLogData()"],["f","getEventPoster()"],["f","getEventProperties()"],["f","getEventRange()"],["f","getExceedingMessages()"],["f","getFileVersions()"],["f","getFolderAttachmentCount()"],["f","getFormMsgSubject()"],["f","getGroupModerators()"],["f","getGroups()"],["f","getHoliday()"],["f","getHolidayRange()"],["f","getIDMemberFromGroupModerators()"],["f","getInheritableGroups()"],["f","getLanguages()"],["f","getLastPosts()"],["f","getLegacyAttachmentFilename()"],["f","getLoggedTopics()"],["f","getMaxGroupID()"],["f","getMaxSmileyOrder()"],["f","getMaxThumbnail()"],["f","getMaxTopicID()"],["f","getMember()"],["f","getMemberBoardPermissions()"],["f","getMemberByName()"],["f","getMemberData()"],["f","getMemberGeneralPermissions()"],["f","getMembersInRange()"],["f","getMembersIPs()"],["f","getMembersOnlineStats()"],["f","getMessageIcons()"],["f","getMessageTableColumns()"],["f","getModerators()"],["f","getModReports()"],["f","getMsgMemberID()"],["f","getNews()"],["f","getNewsletterRecipients()"],["f","getNumAttachments()"],["f","getNumSpiderLogs()"],["f","getNumSpiders()"],["f","getNumSpiderStats()"],["f","getNumUnwatchedBy()"],["f","getOldDrafts()"],["f","getOtherGroups()"],["f","getPackageInfo()"],["f","getPendingSubscriptions()"],["f","getPermission()"],["f","getPMCount()"],["f","getPmsFromDiscussion()"],["f","getPMsOlderThan()"],["f","getPollChoices()"],["f","getPollStarter()"],["f","getProfileField()"],["f","getQuickAdminTasks()"],["f","getRecentPosts()"],["f","getReportModeratorsComments()"],["f","getReportsUserComments()"],["f","getServerStoredAvatars()"],["f","getServerVersions()"],["f","getSignatureFromMembers()"],["f","getSmiley()"],["f","getSmileyPosition()"],["f","getSmileys()"],["f","getSpiderDetails()"],["f","getSpiderLogs()"],["f","getSpiders()"],["f","getSpiderStats()"],["f","getSubject()"],["f","getSubscriptionDetails()"],["f","getSubscriptionStatus()"],["f","getTaskLogEntries()"],["f","getThemeName()"],["f","getThemesPathbyID()"],["f","getTodayInfo()"],["f","getTopicInfo()"],["f","getTopicsPostsAndPoster()"],["f","getTopicsToMove()"],["f","getUnapprovedPosts()"],["f","getUnreadCountSince()"],["f","getUnwatchedBy()"],["f","getUserMentions()"],["f","getXMLNews()"],["f","getXMLRecent()"],["f","groupRequests()"],["c","Groups_Controller"],["f","groupsAllowedTo()"],["f","handleRefund()"],["f","hasBoardNotification()"],["f","hasTopicNotification()"],["c","Help_Controller"],["f","highlight_php_code()"],["f","host_from_ip()"],["c","Html_2_BBC"],["c","Html_2_Md"],["f","htmlspecialchars__recursive()"],["f","htmlTime()"],["f","htmltrim__recursive()"],["f","imagecopyresamplebicubic()"],["f","imagecreatefrombmp()"],["f","imageMemoryCheck()"],["f","increaseDownloadCounter()"],["f","increaseGuestVote()"],["f","increaseTopicLikes()"],["f","increaseViewCounter()"],["f","increaseVoteCounter()"],["f","incrementBoard()"],["c","InlinePermissions_Form"],["f","insertBanGroup()"],["f","insertBoardPermission()"],["f","insertEvent()"],["f","insertHoliday()"],["f","insertPollOptions()"],["f","insertSubscription()"],["f","installedThemes()"],["f","integration_hooks_count()"],["f","ip2range()"],["f","is_not_banned()"],["f","is_not_guest()"],["f","isAccessiblePM()"],["f","isAllowedTo()"],["f","isAnotherAdmin()"],["f","isAuthorizedServer()"],["f","isBannedEmail()"],["f","isBrowser()"],["f","isChildOf()"],["f","isFirstLogin()"],["f","isPackageInstalled()"],["f","isReservedName()"],["f","isSmileySetInstalled()"],["f","isValidEmail()"],["f","isValidIPv6()"],["f","JavaScriptEscape()"],["c","Jslocale_Controller"],["c","Karma_Controller"],["f","lastActionOn()"],["f","lastLikeOn()"],["f","lastPost()"],["f","likePost()"],["c","Likes_Controller"],["f","likesCount()"],["f","likesPostsGiven()"],["f","likesPostsReceived()"],["f","linkMessages()"],["f","list_count_filter_parser()"],["f","list_get_filter_parser()"],["f","list_getAttachDirs()"],["f","list_getBanItems()"],["f","list_getBanLogEntries()"],["f","list_getBans()"],["f","list_getBanTriggers()"],["f","list_getBaseDirs()"],["f","list_getFiles()"],["f","list_getGroupRequestCount()"],["f","list_getGroupRequests()"],["f","list_getHolidays()"],["f","list_getLanguages()"],["f","list_getLanguagesList()"],["f","list_getMailQueue()"],["f","list_getMailQueueSize()"],["f","list_getMembergroups()"],["f","list_getMembers()"],["f","list_getModLogEntries()"],["f","list_getModLogEntryCount()"],["f","list_getNumBanItems()"],["f","list_getNumBanLogEntries()"],["f","list_getNumBans()"],["f","list_getNumBanTriggers()"],["f","list_getNumFiles()"],["f","list_getNumHolidays()"],["f","list_getNumLanguages()"],["f","list_getNumMembers()"],["f","list_getNumSmileys()"],["f","list_getNumSmileySets()"],["f","list_getNumUnapprovedAttachments()"],["f","list_getProfileFields()"],["f","list_getProfileFieldSize()"],["f","list_getSmileys()"],["f","list_getSmileySets()"],["f","list_getSubscribedUserCount()"],["f","list_getSubscribedUsers()"],["f","list_getUnapprovedAttachments()"],["f","list_getUserWarningCount()"],["f","list_getUserWarnings()"],["f","list_integration_hooks_data()"],["f","list_maillist_count_unapproved()"],["f","list_maillist_unapproved()"],["f","list_MailQueueStatus()"],["f","listMembergroupMembers_Href()"],["f","listtree()"],["f","load_draft()"],["f","load_user_drafts()"],["f","load_user_posts()"],["f","load_user_topics()"],["f","loadAllPermissions()"],["f","loadAllSubsctiptions()"],["f","loadAssetFile()"],["f","loadAttachmentContext()"],["f","loadBadBehavior()"],["f","loadBasedOnTheme()"],["f","loadBoard()"],["f","loadConversationList()"],["f","loadConversationUnreadStatus()"],["f","loadCSSFile()"],["f","loadCustomFields()"],["f","loadDatabase()"],["f","loadDraft()"],["f","loadEmailTemplate()"],["f","loadEssentialThemeData()"],["f","loadExistingMember()"],["f","loadForumTests()"],["f","loadGroups()"],["f","loadIllegalGuestPermissions()"],["f","loadIllegalPermissions()"],["f","loadInstalledPackages()"],["f","loadJavascriptFile()"],["f","loadLanguage()"],["f","loadLikes()"],["f","loadMemberContext()"],["f","loadMemberData()"],["f","loadMemberSubscriptions()"],["f","loadMessageDetails()"],["f","loadMessageLimit()"],["f","loadMessageRequest()"],["f","loadModeratorMenuCounts()"],["f","loadPaymentGateways()"],["f","loadPermissionProfiles()"],["f","loadPermissions()"],["f","loadPersonalMessage()"],["f","loadPMLabels()"],["f","loadPMLimits()"],["f","loadPMMessageRequest()"],["f","loadPMQuote()"],["f","loadPMRecipientInfo()"],["f","loadPMRecipientsAll()"],["f","loadPMs()"],["f","loadPMSearchHeads()"],["f","loadPMSearchMessages()"],["f","loadPMSearchResults()"],["f","loadPMSubjectRequest()"],["f","loadPollContext()"],["f","loadProfileFields()"],["f","loadRules()"],["f","loadSession()"],["f","loadSubscriptions()"],["f","loadSubTemplate()"],["f","loadTaskDetails()"],["f","loadTasks()"],["f","loadTemplate()"],["f","loadTheme()"],["f","loadThemeOptions()"],["f","loadThemeOptionsInto()"],["f","loadThemes()"],["f","loadThemesAffected()"],["f","loadUserSettings()"],["f","loadVerificationControls()"],["f","lockPoll()"],["f","log_ban()"],["f","log_email()"],["f","log_error()"],["f","log_lang_error()"],["f","logAction()"],["f","logActions()"],["f","logLastDatabaseError()"],["f","logLoginHistory()"],["f","logNewSubscription()"],["f","logOnline()"],["f","logPackageInstall()"],["f","logSpider()"],["f","logSubscription()"],["f","logTask()"],["f","logTriggersUpdates()"],["f","logWarning()"],["f","logWarningNotice()"],["f","long_to_binary()"],["f","mail_insert_key()"],["f","mailFromMessage()"],["f","maillist_board_list()"],["f","maillist_delete_error_entry()"],["f","maillist_delete_filter_parser()"],["f","maillist_load_filter_parser()"],["f","maillist_templates()"],["c","Maintenance_Controller"],["f","makeCustomFieldChanges()"],["f","makeNotificationChanges()"],["f","makeThemeChanges()"],["c","ManageAttachments_Controller"],["c","ManageAvatars_Controller"],["c","ManageBans_Controller"],["c","ManageBBC_Controller"],["c","ManageBoards_Controller"],["c","ManageCalendar_Controller"],["c","ManageDrafts_Controller"],["c","ManageErrors_Controller"],["c","ManageFeatures_Controller"],["c","ManageLanguages_Controller"],["c","ManageMail_Controller"],["c","ManageMaillist_Controller"],["c","ManageMembergroups_Controller"],["c","ManageMembers_Controller"],["c","ManageNews_Controller"],["c","ManagePaid_Controller"],["c","ManagePermissions_Controller"],["c","ManagePosts_Controller"],["c","ManageRegistration_Controller"],["c","ManageScheduledTasks_Controller"],["c","ManageSearch_Controller"],["c","ManageSearchEngines_Controller"],["c","ManageSecurity_Controller"],["c","ManageServer_Controller"],["c","ManageSmileys_Controller"],["c","ManageThemes_Controller"],["c","ManageTopics_Controller"],["f","markBoardsRead()"],["f","markMessages()"],["f","markMessagesUnread()"],["f","markPMsRead()"],["c","MarkRead_Controller"],["f","markTopicsRead()"],["f","matchHighestPackageVersion()"],["f","matchPackageVersion()"],["f","maxAttachment()"],["f","maxMemberID()"],["f","maxNoThumb()"],["f","md5_hmac()"],["f","memberByOpenID()"],["f","memberExists()"],["f","membergroupById()"],["f","membergroupsById()"],["c","Memberlist_Controller"],["f","memberQuerySeeBoard()"],["c","Members_Controller"],["f","membersAllowedTo()"],["f","membersBy()"],["f","membersInGroups()"],["f","memoryReturnBytes()"],["c","Mentions_Controller"],["f","mergeableTopics()"],["c","MergeTopics_Controller"],["f","messageAt()"],["f","messageDetails()"],["c","MessageIndex_Controller"],["f","messageIndexBar()"],["f","messageIndexSort()"],["f","messageIndexTopics()"],["f","messageLikeCount()"],["f","messagePointer()"],["f","messagePostError()"],["f","messagesAttachments()"],["f","messagesInTopics()"],["f","messagesSince()"],["f","MessageTopicIcons()"],["f","mimespecialchars()"],["f","mimespecialchars_callback()"],["f","mktree()"],["f","ml_alphaStart()"],["f","ml_CustomProfile()"],["f","ml_findSearchableCustomFields()"],["f","ml_memberCache()"],["f","ml_memberCount()"],["f","ml_searchMembers()"],["f","ml_selectMembers()"],["f","modAddUpdateTemplate()"],["c","ModerateAttachments_Controller"],["c","ModerationCenter_Controller"],["f","moderatorNotes()"],["f","moderatorNotice()"],["f","modify_pm_draft()"],["f","modify_post_draft()"],["f","modifyBoard()"],["f","modifyCategory()"],["f","modifyEvent()"],["f","modifyPoll()"],["f","modifyPollOption()"],["f","modifyPost()"],["f","modLoadTemplate()"],["c","Modlog_Controller"],["c","ModLogEntriesReplacement"],["f","modReportDetails()"],["f","monthlyActivity()"],["f","mostOnline()"],["f","moveAttachments()"],["f","moveAvatars()"],["f","moveSmileyPosition()"],["c","MoveTopic_Controller"],["f","moveTopicConcurrence()"],["f","moveTopics()"],["c","News_Controller"],["f","newTable()"],["f","next_time()"],["f","nextMessage()"],["f","nextSmileyLocation()"],["f","nextTheme()"],["f","nextTime()"],["f","nextTopic()"],["c","Notify_Controller"],["f","numCategories()"],["f","numErrors()"],["f","numPMSeachResults()"],["f","ob_sessrewrite()"],["f","obExit()"],["f","onlineCount()"],["f","onlineMembers()"],["c","OpenID"],["c","OpenID_Controller"],["f","optimizeTable()"],["f","overallAttachmentsSize()"],["f","package_chmod()"],["f","package_create_backup()"],["f","package_crypt()"],["f","package_flush_cache()"],["f","package_get_contents()"],["f","package_put_contents()"],["f","packageRequireFTP()"],["c","Packages_Controller"],["c","PackageServers_Controller"],["f","parse_autolink()"],["f","parse_bbc()"],["f","parse_path()"],["f","parseBoardMod()"],["f","parseModification()"],["f","parsePackageInfo()"],["f","parsesmileys()"],["c","ParseSmileysReplacement"],["f","pauseAttachmentMaintenance()"],["f","pausePermsSave()"],["f","pauseRepairProcess()"],["f","pauseSignatureApplySettings()"],["c","PayPal_Display"],["c","PayPal_Payment"],["f","pbe_check_moderation()"],["f","pbe_clean_email_subject()"],["f","pbe_create_pm()"],["f","pbe_create_post()"],["f","pbe_create_topic()"],["f","pbe_email_attachments()"],["f","pbe_email_quote_depth()"],["f","pbe_email_to_bbc()"],["f","pbe_emailError()"],["f","pbe_filter_email_message()"],["f","pbe_find_board_number()"],["f","pbe_fix_client_quotes()"],["f","pbe_fix_email_body()"],["f","pbe_fix_email_quotes()"],["f","pbe_load_text()"],["f","pbe_parse_email_message()"],["f","pbe_prepare_text()"],["f","pbe_run_parsers()"],["f","pbe_str_replace_once()"],["f","pc_next_permutation()"],["f","permProfilesInUse()"],["f","permute()"],["c","PersonalMessage_Controller"],["f","phpBB3_password_check()"],["f","pmCount()"],["c","Poll_Controller"],["f","pollInfo()"],["f","pollInfoForTopic()"],["f","pollOptions()"],["f","pollOptionsForMember()"],["f","pollStarters()"],["f","pollStatus()"],["f","populateDuplicateMembers()"],["f","port_type()"],["c","Post_Controller"],["f","postbyemail_imap()"],["f","postbyemail_toggle_callback()"],["f","posterDetails()"],["f","postersCount()"],["f","postLikers()"],["c","PostModeration_Controller"],["f","postSplitRedirect()"],["f","prepareCreditsData()"],["f","prepareDeleteSubscriptions()"],["f","prepareDraftsContext()"],["f","prepareLikes()"],["f","prepareMailingForPreview()"],["f","prepareMembergroupPermissions()"],["f","prepareMessageContext()"],["f","preparePMContext_callback()"],["f","prepareSearchEngines()"],["f","preparsecode()"],["f","preparsecode_font_callback()"],["f","preparsecode_lowertags_callback()"],["f","preparsecode_nobbc_callback()"],["f","preparsetable()"],["f","previousMessage()"],["f","previousTopic()"],["f","printMemberListRows()"],["f","processAttachments()"],["f","processNextTasks()"],["c","Profile_Controller"],["c","ProfileAccount_Controller"],["c","ProfileHistory_Controller"],["c","ProfileInfo_Controller"],["f","profileLoadAttachments()"],["f","profileLoadAvatarData()"],["f","profileLoadGroups()"],["f","profileLoadLanguages()"],["f","profileLoadSignatureData()"],["c","ProfileOptions_Controller"],["f","profileReloadUser()"],["f","profileSaveAvatarData()"],["f","profileSaveGroups()"],["f","profileSendActivation()"],["c","ProfileSubscriptions_Controller"],["f","profileValidateEmail()"],["f","profileValidateSignature()"],["f","purgeMembers()"],["f","query_get_theme()"],["f","query_key_maintenance()"],["f","query_key_owner()"],["f","query_load_board()"],["f","query_load_board_details()"],["f","query_load_message()"],["f","query_load_permissions()"],["f","query_load_subject()"],["f","query_load_user_info()"],["f","query_mark_pms()"],["f","query_notifications()"],["f","query_sender_wrapper()"],["f","query_update_member_stats()"],["f","query_user_keys()"],["f","quote_callback()"],["f","quote_callback_2()"],["f","range2ip()"],["f","read_tgz_data()"],["f","read_tgz_file()"],["f","read_zip_data()"],["f","reapplySubscriptions()"],["f","reattributePosts()"],["f","rebuildModCache()"],["f","recacheSpiderNames()"],["c","Recent_Controller"],["f","recentlyLogged()"],["f","recentMembers()"],["f","recordReport()"],["f","recountApprovedMessages()"],["f","recountFailedEmails()"],["f","recountOpenReports()"],["f","recountUnapprovedMessages()"],["f","recountUnapprovedPosts()"],["f","recursiveBoards()"],["f","redirectexit()"],["f","redirectexit_callback()"],["f","reduceMailQueue()"],["f","reencodeImage()"],["c","Register_Controller"],["f","registerMember()"],["f","reloadSettings()"],["c","Reminder_Controller"],["f","remove_integration_function()"],["f","removeAttachments()"],["f","removeBanGroups()"],["f","removeBanLogs()"],["f","removeBanTriggers()"],["f","removeCommonWordsFromIndex()"],["f","removeEvent()"],["f","removeFollowUpsByMessage()"],["f","removeFollowUpsByTopic()"],["f","removeHolidays()"],["f","removeLanguageFromMember()"],["f","removeMembersFromGroups()"],["f","removeMentions()"],["f","removeMessage()"],["f","removeMessages()"],["f","removeModeratorNote()"],["f","removeModeratorPermissions()"],["f","removeNonTopicMessages()"],["f","removeOldTopics()"],["f","removeOrphanAttachments()"],["f","removePoll()"],["f","removeScheduleTaskImmediate()"],["f","removeSettings()"],["f","removeSpiderOldLogs()"],["f","removeSpiderOldStats()"],["f","removeSpiders()"],["f","removeSubscription()"],["f","removeTempAttachById()"],["f","removeThemeOptions()"],["c","RemoveTopic_Controller"],["f","removeTopics()"],["f","removeVote()"],["f","removeWarningTemplate()"],["f","renamePermissionProfile()"],["f","reorderBoards()"],["f","repairAttachmentData()"],["c","RepairBoards_Controller"],["f","replaceBasicActionUrl()"],["f","replaceBoardPermission()"],["f","replaceEntities__callback()"],["f","replacePermission()"],["f","reportedPosts()"],["c","Reports_Controller"],["f","reportsBoardsList()"],["c","Request"],["f","request()"],["f","requireTemplate()"],["f","resetBoardsCounter()"],["f","resetNextSendTime()"],["f","resetPassword()"],["f","resetSentBoardNotification()"],["f","resetVotes()"],["f","resizeBBCImages()"],["f","resizeImage()"],["f","resizeImageFile()"],["f","resizeMessageTableBody()"],["f","response_prefix()"],["f","retrieveMemberData()"],["f","rlikeMentions()"],["f","run_this_task()"],["f","sanitizeMSCutPaste()"],["f","saveAvatar()"],["f","saveDraft()"],["f","savePMDraft()"],["f","saveProfileChanges()"],["f","saveProfileFields()"],["f","saveTriggers()"],["c","Scheduled_Task"],["f","scheduledTasks()"],["c","ScheduledTasks_Controller"],["f","scheduleTaskImmediate()"],["c","Search_Controller"],["f","searchSort()"],["f","secretAnswerInput()"],["f","secureDirectory()"],["f","securityOptionsHeader()"],["f","selectMessages()"],["f","sendAdminNotifications()"],["f","sendApprovalNotifications()"],["f","sendBoardNotifications()"],["f","sendmail()"],["f","sendNotifications()"],["f","sendpm()"],["f","server_parse()"],["f","sessionClose()"],["f","sessionDestroy()"],["f","sessionGC()"],["f","sessionOpen()"],["f","sessionRead()"],["f","sessionWrite()"],["f","set_fatal_error_headers()"],["f","setBoardNotification()"],["f","setGroupToHidden()"],["f","setKeys()"],["f","setLoginCookie()"],["f","setMemoryLimit()"],["f","setPackagesAsUninstalled()"],["f","setPackageState()"],["f","setPermissionLevel()"],["f","setPMRepliedStatus()"],["f","setRemovalNotice()"],["c","Settings_Form"],["f","setTopicAttribute()"],["f","setTopicNotification()"],["f","setTopicWatch()"],["f","setup_fatal_error_context()"],["f","setupMenuContext()"],["f","setupProfileContext()"],["f","setupThemeContext()"],["f","sha1_core()"],["f","sha1_ft()"],["f","sha1_kt()"],["f","sha1_rol()"],["f","sha1_smf()"],["f","showCodeImage()"],["f","showEmailAddress()"],["f","showLetterImage()"],["c","Site_Combiner"],["c","Site_Dispatcher"],["f","smileyExists()"],["f","smtp_mail()"],["f","sortMessageIconTable()"],["f","sortSmileyTable()"],["f","sortSpiderTable()"],["f","spamProtection()"],["c","Sphinx_Search"],["c","Sphinxql_Search"],["f","spiderCheck()"],["f","spidersLastSeen()"],["f","spidersStatsDates()"],["f","splitAttemptMove()"],["f","splitDestinationBoard()"],["f","splitTopic()"],["c","SplitTopics_Controller"],["f","ssi_boardNews()"],["f","ssi_boardStats()"],["f","ssi_checkPassword()"],["f","ssi_fetchGroupMembers()"],["f","ssi_fetchMember()"],["f","ssi_fetchPosts()"],["f","ssi_latestMember()"],["f","ssi_login()"],["f","ssi_logOnline()"],["f","ssi_logout()"],["f","ssi_menubar()"],["f","ssi_news()"],["f","ssi_pollVote()"],["f","ssi_queryMembers()"],["f","ssi_queryPosts()"],["f","ssi_quickSearch()"],["f","ssi_randomMember()"],["f","ssi_recentAttachments()"],["f","ssi_recentEvents()"],["f","ssi_recentPoll()"],["f","ssi_recentPosts()"],["f","ssi_recentTopics()"],["f","ssi_showPoll()"],["f","ssi_shutdown()"],["f","ssi_todaysBirthdays()"],["f","ssi_todaysCalendar()"],["f","ssi_todaysEvents()"],["f","ssi_todaysHolidays()"],["f","ssi_topBoards()"],["f","ssi_topPoll()"],["f","ssi_topPoster()"],["f","ssi_topTopics()"],["f","ssi_topTopicsReplies()"],["f","ssi_topTopicsViews()"],["f","ssi_welcome()"],["f","ssi_whosOnline()"],["c","Standard_Search"],["f","standardTime()"],["c","Stats_Controller"],["f","subscriptions_toggle_callback()"],["c","Suggest"],["c","Suggest_Controller"],["f","sumRecentPosts()"],["f","template_admin_warning_above()"],["f","template_css()"],["f","template_footer()"],["f","template_header()"],["f","template_homepage_sample1()"],["f","template_homepage_sample1_html()"],["f","template_homepage_sample1_php()"],["f","template_include()"],["f","template_javascript()"],["c","Template_Layers"],["f","template_rawdata()"],["f","template_ssi_above()"],["f","template_ssi_below()"],["f","text2words()"],["f","theme_copyright()"],["f","theme_inline_permissions()"],["f","themeDirectory()"],["f","themeUrl()"],["f","time_since()"],["f","toggleMentionsAccessibility()"],["f","toggleMentionsApproval()"],["f","toggleMentionsVisibility()"],["f","toggleNewPM()"],["f","toggleTaskStatusByName()"],["f","toggleTopicSticky()"],["f","topBoards()"],["c","Topic_Controller"],["f","topicAttribute()"],["f","topicFromPoll()"],["f","topicMessages()"],["f","topicNotificationCount()"],["f","topicNotifications()"],["f","topicPointer()"],["f","topicsDetails()"],["f","topicsList()"],["f","topicsParticipation()"],["f","topicsPosters()"],["f","topicsStartedBy()"],["f","topicStartedHere()"],["f","topicStatus()"],["f","topicSubject()"],["f","topicUserAttributes()"],["f","topPosters()"],["f","topTimeOnline()"],["f","topTopicReplies()"],["f","topTopicStarter()"],["f","topTopicViews()"],["f","totalReports()"],["f","trackStats()"],["f","trackStatsUsersOnline()"],["c","twoCheckOut_Display"],["c","twoCheckOut_Payment"],["f","un_compressed()"],["f","un_htmlspecialchars()"],["f","un_preparsecode()"],["f","unapprovedPosts()"],["f","unlinkMessages()"],["c","UnTgz"],["c","UnZip"],["f","updateAdminPreferences()"],["f","updateAttachmentIdFolder()"],["f","updateAttachmentThumbnail()"],["f","updateBanGroup()"],["f","updateBanMembers()"],["f","updateBoardsCounter()"],["f","updateBoardsLastMessage()"],["f","updateChildPermissions()"],["f","updateCopiedGroup()"],["f","updateDbLastError()"],["f","updateDisplayCache()"],["f","updateFailedQueue()"],["f","updateInheritedGroup()"],["f","updateKarma()"],["f","updateLabelsToPM()"],["f","updateLastMessages()"],["f","updateLike()"],["f","updateMemberData()"],["f","updateMembergroupProperties()"],["f","updateMembersPostCount()"],["f","updateMemberStats()"],["f","updateMentionMenuCount()"],["f","updateMessageIcon()"],["f","updateMessagesBoardID()"],["f","updateMessageStats()"],["f","updateNextSendTime()"],["f","updateNonrecurrent()"],["f","updateParserFilterOrder()"],["f","updatePendingStatus()"],["f","updatePendingSubscription()"],["f","updatePendingSubscriptionCount()"],["f","updatePersonalMessagesCounter()"],["f","updatePMLabels()"],["f","updatePMMenuCounts()"],["f","updatePMRule()"],["f","updatePMRuleAction()"],["f","updatePostGroupStats()"],["f","updateProfileField()"],["f","updateProfileFieldOrder()"],["f","updateReadNotificationsFor()"],["f","updateRenamedProfileField()"],["f","updateRenamedProfileStatus()"],["f","updateReportsStatus()"],["f","updateSettings()"],["f","updateSignature()"],["f","updateSmiley()"],["f","updateSmileyDisplayType()"],["f","updateSmileyOrder()"],["f","updateSmileyRow()"],["f","updateSpider()"],["f","updateSplitTopics()"],["f","updateStats()"],["f","updateSubjectStats()"],["f","updateSubscription()"],["f","updateSubscriptionItem()"],["f","updateSuccessQueue()"],["f","updateTask()"],["f","updateTaskStatus()"],["f","updateThemeOptions()"],["f","updateTopicStats()"],["f","updateTriggers()"],["f","updateZeroPostMembers()"],["f","url_exists()"],["f","url_image_size()"],["f","url_parts()"],["f","user_info_callback()"],["f","userByEmail()"],["f","UserStatsMostActiveBoard()"],["f","UserStatsMostPostedBoard()"],["f","UserStatsPollsStarted()"],["f","UserStatsPollsVoted()"],["f","UserStatsPostingTime()"],["f","UserStatsTopicsStarted()"],["f","utf8_strtolower()"],["f","utf8_strtoupper()"],["c","Util"],["f","validate_ownmention()"],["f","validateAttachID()"],["f","validateAttachments()"],["f","validateDuplicateSmiley()"],["f","validateEventPost()"],["f","validateLoginPassword()"],["f","validateNotificationAccess()"],["f","validatePassword()"],["f","validatePasswordFlood()"],["f","validateSession()"],["f","validateShowGroupMembership()"],["f","validateSubscriptionID()"],["f","validateThemeName()"],["f","validateToken()"],["f","validateTriggers()"],["f","validateUsername()"],["c","Verification_Controls"],["c","Verification_Controls_Captcha"],["c","Verification_Controls_EmptyField"],["c","Verification_Controls_Questions"],["f","viewers()"],["f","wantedBoards()"],["f","warningCount()"],["f","warningDailyLimit()"],["f","warnings()"],["f","warningTemplateCount()"],["f","warningTemplates()"],["f","watchedUserCount()"],["f","watchedUserPosts()"],["f","watchedUserPostsCount()"],["f","watchedUsers()"],["c","Who_Controller"],["f","write_theme_info()"],["f","writeLog()"],["c","Xml_Array"],["c","Xml_Controller"],["c","XmlPreview_Controller"]];
