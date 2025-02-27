/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import {
  APM_APP_ID,
  LOGS_APP_ID,
  METRICS_APP_ID,
  OBSERVABILITY_LOGS_EXPLORER_APP_ID,
  OBSERVABILITY_ONBOARDING_APP_ID,
  OBSERVABILITY_OVERVIEW_APP_ID,
  SYNTHETICS_APP_ID,
} from './constants';

type LogsApp = typeof LOGS_APP_ID;
type ObservabilityLogsExplorerApp = typeof OBSERVABILITY_LOGS_EXPLORER_APP_ID;
type ObservabilityOverviewApp = typeof OBSERVABILITY_OVERVIEW_APP_ID;
type MetricsApp = typeof METRICS_APP_ID;
type ApmApp = typeof APM_APP_ID;
type SyntheticsApp = typeof SYNTHETICS_APP_ID;
type ObservabilityOnboardingApp = typeof OBSERVABILITY_ONBOARDING_APP_ID;

export type AppId =
  | LogsApp
  | ObservabilityLogsExplorerApp
  | ObservabilityOverviewApp
  | ObservabilityOnboardingApp
  | ApmApp
  | MetricsApp
  | SyntheticsApp;

export type LogsLinkId = 'log-categories' | 'settings' | 'anomalies' | 'stream';

export type ObservabilityOverviewLinkId =
  | 'alerts'
  | 'cases'
  | 'cases_configure'
  | 'cases_create'
  | 'rules'
  | 'slos';

export type MetricsLinkId =
  | 'inventory'
  | 'metrics-explorer'
  | 'hosts'
  | 'settings'
  | 'assetDetails';

export type ApmLinkId =
  | 'services'
  | 'traces'
  | 'service-groups-list'
  | 'service-map'
  | 'dependencies'
  | 'settings'
  | 'storage-explorer';

export type SyntheticsLinkId = 'overview' | 'management';

export type LinkId =
  | LogsLinkId
  | ObservabilityOverviewLinkId
  | MetricsLinkId
  | ApmLinkId
  | SyntheticsLinkId;

export type DeepLinkId =
  | AppId
  | `${LogsApp}:${LogsLinkId}`
  | `${ObservabilityOverviewApp}:${ObservabilityOverviewLinkId}`
  | `${MetricsApp}:${MetricsLinkId}`
  | `${ApmApp}:${ApmLinkId}`
  | `${SyntheticsApp}:${SyntheticsLinkId}`;
