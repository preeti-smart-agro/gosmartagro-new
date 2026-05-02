/**
 * Sandalwood Farmland Investment Calculator
 * 15-Year Financial Projection Calculator
 */

class SandalwoodCalculator {
    constructor() {
        this.defaultValues = {
            initialInvestment: 4000000, // ₹40 lakh
            intercropIncome: 100000,    // ₹1 lakh per year
            landAppreciationRate: 0.10, // 10% annually
            sandalwoodMin: 60000000,    // ₹6 crore
            sandalwoodMax: 100000000,   // ₹10 crore
            years: 15
        };
        
        this.currentValues = { ...this.defaultValues };
    }
    
    /**
     * Calculate compound interest
     * @param {number} principal - Initial amount
     * @param {number} rate - Annual interest rate (as decimal)
     * @param {number} years - Number of years
     * @returns {number} Final amount
     */
    calculateCompoundInterest(principal, rate, years) {
        return principal * Math.pow(1 + rate, years);
    }
    
    /**
     * Format currency for display
     * @param {number} amount - Amount in rupees
     * @returns {string} Formatted currency string
     */
    formatCurrency(amount) {
        if (amount >= 10000000) {
            return '₹' + (amount / 10000000).toFixed(2) + ' crore';
        } else if (amount >= 100000) {
            return '₹' + (amount / 100000).toFixed(1) + ' lakh';
        } else {
            return '₹' + amount.toLocaleString('en-IN');
        }
    }
    
    /**
     * Calculate the complete financial projection
     * @param {Object} values - Investment parameters
     * @returns {Object} Complete projection results
     */
    calculateProjection(values = this.currentValues) {
        const {
            initialInvestment,
            intercropIncome,
            landAppreciationRate,
            sandalwoodMin,
            sandalwoodMax,
            years
        } = values;
        
        // Calculate intercrop income over the period
        const totalIntercropIncome = intercropIncome * years;
        
        // Calculate land appreciation using compound interest
        const finalLandValue = this.calculateCompoundInterest(initialInvestment, landAppreciationRate, years);
        const landAppreciationAmount = finalLandValue - initialInvestment;
        
        // Calculate total returns
        const totalMin = totalIntercropIncome + landAppreciationAmount + sandalwoodMin;
        const totalMax = totalIntercropIncome + landAppreciationAmount + sandalwoodMax;
        
        // Calculate ROI percentages
        const roiMin = ((totalMin - initialInvestment) / initialInvestment) * 100;
        const roiMax = ((totalMax - initialInvestment) / initialInvestment) * 100;
        
        return {
            initialInvestment,
            totalIntercropIncome,
            finalLandValue,
            landAppreciationAmount,
            sandalwoodMin,
            sandalwoodMax,
            totalMin,
            totalMax,
            roiMin,
            roiMax,
            netProfitMin: totalMin - initialInvestment,
            netProfitMax: totalMax - initialInvestment
        };
    }
    
    /**
     * Generate HTML table for the projection
     * @param {Object} results - Calculation results
     * @returns {string} HTML table string
     */
    generateProjectionTable(results) {
        return `
            <table class="table table-striped" style="margin-bottom: 0; background: white; border-radius: 8px; overflow: hidden;">
                <thead style="background: linear-gradient(135deg, #28a745, #20c997); color: white;">
                    <tr>
                        <th style="padding: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Component</th>
                        <th style="padding: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Annual / 15-Year Value</th>
                        <th style="padding: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 15px; font-weight: 600; color: #2c3e50;">Intercrop Income</td>
                        <td style="padding: 15px; font-weight: 600; color: #28a745;">${this.formatCurrency(results.totalIntercropIncome / 15)}/year → ${this.formatCurrency(results.totalIntercropIncome)}</td>
                        <td style="padding: 15px; color: #6c757d; font-style: italic;">Recurring income</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; font-weight: 600; color: #2c3e50;">Land Appreciation</td>
                        <td style="padding: 15px; font-weight: 600; color: #28a745;">${this.formatCurrency(results.initialInvestment)} → ${this.formatCurrency(results.finalLandValue)}</td>
                        <td style="padding: 15px; color: #6c757d; font-style: italic;">8–12% annual growth</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; font-weight: 600; color: #2c3e50;">Sandalwood Harvest</td>
                        <td style="padding: 15px; font-weight: 600; color: #28a745;">${this.formatCurrency(results.sandalwoodMin)}–${this.formatCurrency(results.sandalwoodMax)}</td>
                        <td style="padding: 15px; color: #6c757d; font-style: italic;">40–60 mature trees per acre</td>
                    </tr>
                    <tr style="background: linear-gradient(135deg, #e8f5e8, #d4edda); font-weight: 700; font-size: 1.1rem;">
                        <td style="padding: 15px; color: #155724;">Total Value (15 Years)</td>
                        <td style="padding: 15px; color: #155724; font-size: 1.2rem;">${this.formatCurrency(results.totalMin)}–${this.formatCurrency(results.totalMax)}</td>
                        <td style="padding: 15px; color: #155724; font-style: italic;">Combined returns</td>
                    </tr>
                </tbody>
            </table>
        `;
    }
    
    /**
     * Generate ROI highlight section
     * @param {Object} results - Calculation results
     * @returns {string} HTML ROI section
     */
    generateROISection(results) {
        return `
            <div class="roi-highlight" style="text-align: center; margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #28a745, #20c997); color: white; border-radius: 8px;">
                <h4 style="margin: 0; font-size: 1.3rem;">Return on Investment: ${results.roiMin.toFixed(0)}% - ${results.roiMax.toFixed(0)}%</h4>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Total ROI over 15 years</p>
            </div>
        `;
    }
    
    /**
     * Generate detailed breakdown section
     * @param {Object} results - Calculation results
     * @returns {string} HTML breakdown section
     */
    generateBreakdownSection(results) {
        return `
            <div class="breakdown-section" style="margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 5px solid #28a745;">
                <h4 style="color: #2c3e50; margin-bottom: 15px;">Detailed Calculation Breakdown</h4>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #dee2e6;">
                    <span style="font-weight: 500; color: #495057;">Initial Investment:</span>
                    <span style="font-weight: 600; color: #28a745;">${this.formatCurrency(results.initialInvestment)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #dee2e6;">
                    <span style="font-weight: 500; color: #495057;">Intercrop Income (15 years):</span>
                    <span style="font-weight: 600; color: #28a745;">${this.formatCurrency(results.totalIntercropIncome)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #dee2e6;">
                    <span style="font-weight: 500; color: #495057;">Land Appreciation:</span>
                    <span style="font-weight: 600; color: #28a745;">${this.formatCurrency(results.landAppreciationAmount)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #dee2e6;">
                    <span style="font-weight: 500; color: #495057;">Sandalwood Harvest:</span>
                    <span style="font-weight: 600; color: #28a745;">${this.formatCurrency(results.sandalwoodMin)} - ${this.formatCurrency(results.sandalwoodMax)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-weight: 700; font-size: 1.1rem; color: #28a745;">
                    <span>Net Profit:</span>
                    <span>${this.formatCurrency(results.netProfitMin)} - ${this.formatCurrency(results.netProfitMax)}</span>
                </div>
            </div>
        `;
    }
    
    /**
     * Generate complete projection HTML
     * @param {Object} values - Investment parameters
     * @param {boolean} includeBreakdown - Whether to include detailed breakdown
     * @returns {string} Complete HTML projection
     */
    generateCompleteProjection(values = this.currentValues, includeBreakdown = true) {
        const results = this.calculateProjection(values);
        
        let html = `
            <div class="financial-projection-container" style="margin: 30px 0; background: #f8f9fa; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 class="text-center" style="color: #2c3e50; margin-bottom: 25px; font-size: 1.8rem; font-weight: 700;">
                    15-Year Financial Projection (1 Acre ${this.formatCurrency(values.initialInvestment)})
                </h2>
                
                ${this.generateProjectionTable(results)}
                ${this.generateROISection(results)}
        `;
        
        if (includeBreakdown) {
            html += this.generateBreakdownSection(results);
        }
        
        html += '</div>';
        
        return html;
    }
    
    /**
     * Update values and recalculate
     * @param {Object} newValues - New investment parameters
     */
    updateValues(newValues) {
        this.currentValues = { ...this.currentValues, ...newValues };
    }
}

// Usage example:
// const calculator = new SandalwoodCalculator();
// const projectionHTML = calculator.generateCompleteProjection();
// document.getElementById('projection-container').innerHTML = projectionHTML;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SandalwoodCalculator;
}
