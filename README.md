# Easy Reports PowerApps Component (PCF)
Easy Reports is a PowerApps component to add chart components to your Dashboards and Forms in a Model Driven app. 

![DashboardEg](/assets/screenshot-dash1.png)

![FormEg](/assets/screenshot-form1.png)

- [Features](#features)
   * [Chart Types](#chart-types)
   * [Theming](#theming)
- [Installation](#installation)
- [Usage](#usage)
   * [Component configuration options](#component-configuration-options)
   * [Adding a chart to a Dashboard](#adding-a-chart-to-a-dashboard)   
   * [Adding a chart to a Form](#adding-a-chart-to-a-form)
- [Contribute](#contribute)
- [Disclaimer](#disclaimer)

# Features
Easy Reports can be used in place of the out-of-the-box charts or side-by side and adds some additional features not found in the default charts, including:

- Multiple chart types - with more to come
- Theme selection from a selection of out-of-the-box themes or custom theming
- Detection and use of choice value colours in theme

## Chart Types
Easy Reports supports the following chart types:

- Donut
- Pie
- Bar
- Area
- Line
- Scatter (future release)
- Bubble (future release)

## Theming
Easy Reports supports multiple themes, a fully customisable theme option and automatically using data choice value colours; 

- Simple (A basic starter theme)

![Simple](/assets/simple-theme.png)

- PowerApps (styled on Microsoft PowerApps purple colour)

![PowerApps](/assets/powerapps-theme.png)

- Fluent (styled on Microsoft's Fluent UI style guide used across all Microsoft products)

![Fluent](/assets/fluent-theme.png)

- Material (A Google Material styled theme)

![Material](/assets/material-theme.png)

- Sheets (A Google Sheets inspired theme)

![Sheets](/assets/sheets-theme.png)

- Polychroma (A bright theme)

![Polychroma](/assets/polychroma-theme.png)

- Custom (fully custom theme based on your own colour palette)

Additionally Choice value colours are automatically used in charts, when the chart is displaying the data related to that option set.

![Data](/assets/data-theme.png)

# Installation
Download the managed solution from [Releases](https://github.com/martinlaukkanen/report-pcf/releases/) and import into your environment in https://make.powerapps.com 

# Usage
## Component configuration options
| Option | Description
| --- | ---
| Theme | Select your desired theme
| Custom Theme | Enter comma separated RGB colors for a custom theme, e.g. #FF0000,#00FF00,#0000FF
| Chart type | Select your desired chart type
| Chart Subtitle | Subtitle text will be shown below the charts list title
| Series 1 | Table field name of the values to show (the measure)
| Series 1 Aggregation | How to aggregate the values (avg, sum, count, etc)
| Series 2 | NOT YET IMPLEMENTED
| Series 2 Aggregation | NOT YET IMPLEMENTED
| Category 1 | Table field name of the values to group by (the dimension)
| Category 2 | NOT YET IMPLEMENTED

## Adding a chart to a Form

1. Open the desired form for editing in [make.powerapps.com](https://make.powerapps.com)
2. From the components menu under More components, add Easy Charts
![Config on Form](/assets/formconfig1.png)
3. Select the table and a view that contains all of the fields that you want to report on
3. Configure component options as described in [Component configuration options](#component-configuration-options)

| Tip: Set the Maximum number of rows property to 250 for faster initial loading of the chart 
![Max rows](/assets/formconfig2.png)

## Adding a chart to a Dashboard
1. Open your (classic) Dashboard for editing in [make.powerapps.com](https://make.powerapps.com)
2. Add a list component to the 

![Edit dashboard](/assets/config1.png)

3. Edit the component, selecting a view that contains all of the fields that you want to report on

![Edit component](/assets/config2.png)

4. Select Control and Add Control, locate and add Easy Charts from the list

![Add control](/assets/config3.png)

5. Edit control properties

![Control properties](/assets/config4.png)

6. Configure the chart properties as described in [Component configuration options](#component-configuration-options)

# Contribute

Contribution is welcome, feel free to submit a pull request.

# Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**